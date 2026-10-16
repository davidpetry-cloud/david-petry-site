// Practice metronome for drum-exercises.html. Compiled to ../metronome.js
// (see metronome/build.sh). The panel stays hidden unless this runs and the
// browser can make sound, so the page never shows controls that do nothing.
//
// Timing follows the Web Audio "lookahead" pattern: a short timer schedules
// clicks a little ahead on the audio clock, which is steady, while the beat
// lights follow along on animation frames.
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:metronome/timing.dart';

// ---- Browser bindings: only what the metronome uses ----------------------

@JS()
external Document get document;

@JS()
external Performance get performance;

@JS()
external int setInterval(JSFunction f, int ms);

@JS()
external void clearInterval(int id);

@JS()
external int setTimeout(JSFunction f, int ms);

@JS()
external void clearTimeout(int id);

@JS()
external int requestAnimationFrame(JSFunction f);

@JS()
external void cancelAnimationFrame(int id);

extension type Document._(JSObject _) implements JSObject {
  external Element? getElementById(String id);
  external Element createElement(String tag);
  external bool get hidden;
}

extension type Performance._(JSObject _) implements JSObject {
  external double now();
}

extension type Element._(JSObject _) implements JSObject {
  external set hidden(bool value);
  external set textContent(String value);
  external set className(String value);
  external DomTokenList get classList;
  external void appendChild(Element child);
  external void addEventListener(String type, JSFunction listener);
}

extension type DomTokenList._(JSObject _) implements JSObject {
  external bool toggle(String token, bool force);
}

/// Inputs and selects: the value is always text.
extension type Field._(JSObject _) implements Element {
  external String get value;
  external set value(String value);
  external bool get checked;
}

@JS()
extension type AudioContext._(JSObject _) implements JSObject {
  external AudioContext();
  external double get currentTime;
  external AudioNode get destination;
  external OscillatorNode createOscillator();
  external GainNode createGain();
  external JSPromise<JSAny?> resume();
  external JSPromise<JSAny?> suspend();
}

extension type AudioNode._(JSObject _) implements JSObject {
  external AudioNode connect(AudioNode destination);
  external void disconnect();
}

extension type AudioParam._(JSObject _) implements JSObject {
  external set value(double value);
  external AudioParam setValueAtTime(double value, double time);
  external AudioParam exponentialRampToValueAtTime(double value, double time);
}

extension type OscillatorNode._(JSObject _) implements AudioNode {
  external AudioParam get frequency;
  external void start(double time);
  external void stop(double time);
}

extension type GainNode._(JSObject _) implements AudioNode {
  external AudioParam get gain;
}

T _el<T extends JSObject>(String id) => document.getElementById(id)! as T;

// ---- The metronome --------------------------------------------------------

void main() {
  final panel = document.getElementById('metronome');
  if (panel == null || !globalContext.has('AudioContext')) return;
  Metronome().wire();
  panel.hidden = false;
}

class Metronome {
  final Field bpmInput = _el('metro-bpm');
  final Field bpmRange = _el('metro-range');
  final Field beatsSelect = _el('metro-beats');
  final Field subSelect = _el('metro-sub');
  final Field accentBox = _el('metro-accent');
  final Element startButton = _el('metro-start');
  final Element dotRow = _el('metro-dots');
  final Element beatText = _el('metro-beat');
  final Element status = _el('metro-status');

  int bpm = 96;
  int beats = 4;
  Subdivision sub = Subdivision.beats;
  bool accent = true;

  AudioContext? _ctx;
  GainNode? _out;
  bool _running = false;
  double _nextTime = 0;
  int _pulse = 0;
  int? _timer;
  int? _frame;
  int _shownBeat = -1;
  final _queue = <(double, int)>[]; // (audio time, pulse index) not yet lit
  final _dots = <Element>[];

  final _taps = TapTempo();
  int? _tapTimer;

  late final JSFunction _tickJs = _tick.toJS;
  late final JSFunction _drawJs = _draw.toJS;

  void wire() {
    _on('metro-range', 'input', () => _setBpm(_parse(bpmRange.value) ?? bpm));
    // While typing, follow only numbers in range; tidy the box on change.
    _on('metro-bpm', 'input', () {
      final n = _parse(bpmInput.value);
      if (n != null && n >= minBpm && n <= maxBpm) _setBpm(n, keepTyping: true);
    });
    _on('metro-bpm', 'change', () => _setBpm(_parse(bpmInput.value) ?? bpm));
    _on('metro-down', 'click', () => _setBpm(bpm - 1));
    _on('metro-up', 'click', () => _setBpm(bpm + 1));
    _on('metro-beats', 'change', () {
      beats = _parse(beatsSelect.value) ?? 4;
      _pulse = 0;
      _buildDots();
    });
    _on('metro-sub', 'change', () {
      sub = Subdivision.byName(subSelect.value);
      _pulse = 0;
    });
    _on('metro-accent', 'change', () => accent = accentBox.checked);
    _on('metro-start', 'click', () => _running ? _stop() : _start());
    _on('metro-tap', 'click', _tap);

    _setBpm(_parse(bpmInput.value) ?? bpm);
    beats = _parse(beatsSelect.value) ?? 4;
    sub = Subdivision.byName(subSelect.value);
    accent = accentBox.checked;
    _buildDots();
  }

  void _on(String id, String type, void Function() handler) =>
      _el<Element>(id).addEventListener(type, ((JSAny? _) => handler()).toJS);

  int? _parse(String text) => num.tryParse(text.trim())?.round();

  void _setBpm(num value, {bool keepTyping = false}) {
    bpm = clampBpm(value);
    bpmRange.value = '$bpm';
    if (!keepTyping) bpmInput.value = '$bpm';
  }

  void _start() {
    final ctx = _ctx ??= AudioContext();
    _playThroughSilentMode();
    ctx.resume();
    _out = ctx.createGain()..connect(ctx.destination);
    _running = true;
    _pulse = 0;
    _queue.clear();
    _nextTime = ctx.currentTime + 0.06;
    _tick();
    _timer = setInterval(_tickJs, 25);
    _frame = requestAnimationFrame(_drawJs);
    startButton.textContent = 'Stop';
    startButton.classList.toggle('is-running', true);
    _say('Playing at $bpm BPM.');
  }

  void _stop() {
    _running = false;
    if (_timer case final id?) clearInterval(id);
    if (_frame case final id?) cancelAnimationFrame(id);
    // Cutting the output silences clicks already scheduled ahead.
    _out?.disconnect();
    _out = null;
    _ctx?.suspend();
    _queue.clear();
    _light(-1);
    startButton.textContent = 'Start';
    startButton.classList.toggle('is-running', false);
    _say('Stopped.');
  }

  /// iPhones mute web audio in silent mode unless the page asks to be
  /// treated as playback (Safari 17 and later; ignored elsewhere).
  void _playThroughSilentMode() {
    final nav = globalContext['navigator'] as JSObject;
    final session = nav['audioSession'];
    if (session.isA<JSObject>()) {
      (session as JSObject)['type'] = 'playback'.toJS;
    }
  }

  void _tick() {
    final ctx = _ctx, out = _out;
    if (!_running || ctx == null || out == null) return;
    // Timers slow down in background tabs, so look further ahead there.
    final ahead = document.hidden ? 1.5 : 0.12;
    // After a stall, skip forward instead of firing a burst of late clicks.
    if (_nextTime < ctx.currentTime) _nextTime = ctx.currentTime + 0.05;
    final perBar = beats * sub.perBeat;
    while (_nextTime < ctx.currentTime + ahead) {
      if (_pulse >= perBar) _pulse = 0;
      _click(ctx, out, pulseAt(_pulse, sub, accentFirst: accent), _nextTime);
      _queue.add((_nextTime, _pulse));
      _nextTime += secondsPerPulse(bpm, sub);
      _pulse = (_pulse + 1) % perBar;
    }
    while (_queue.length > 64) {
      _queue.removeAt(0);
    }
  }

  void _click(AudioContext ctx, GainNode out, Pulse kind, double at) {
    final (pitch, level) = switch (kind) {
      Pulse.accent => (1760.0, 0.9),
      Pulse.beat => (1175.0, 0.55),
      Pulse.sub => (880.0, 0.25),
    };
    final tone = ctx.createOscillator();
    final env = ctx.createGain();
    tone.frequency.value = pitch;
    env.gain
      ..setValueAtTime(level, at)
      ..exponentialRampToValueAtTime(0.0001, at + 0.045);
    tone.connect(env).connect(out);
    tone
      ..start(at)
      ..stop(at + 0.05);
  }

  void _draw(double _) {
    final ctx = _ctx;
    if (!_running || ctx == null) return;
    int? due;
    while (_queue.isNotEmpty && _queue.first.$1 <= ctx.currentTime) {
      due = _queue.removeAt(0).$2;
    }
    if (due != null) _light(beatOf(due, sub));
    _frame = requestAnimationFrame(_drawJs);
  }

  void _buildDots() {
    dotRow.textContent = '';
    _dots.clear();
    for (var i = 0; i < beats; i++) {
      final dot = document.createElement('span')
        ..className = i == 0 ? 'metro-dot is-one' : 'metro-dot';
      dotRow.appendChild(dot);
      _dots.add(dot);
    }
    _shownBeat = -2;
    _light(-1);
  }

  /// Lights one beat (or none, for -1) and writes it out in words.
  void _light(int beat) {
    if (beat == _shownBeat) return;
    _shownBeat = beat;
    for (var i = 0; i < _dots.length; i++) {
      _dots[i].classList.toggle('is-on', i == beat);
    }
    beatText.textContent =
        beat >= 0 && beat < beats ? 'Beat ${beat + 1} of $beats' : 'Not playing';
  }

  void _tap() {
    final tempo = _taps.tap(performance.now());
    if (_tapTimer case final id?) clearTimeout(id);
    if (tempo == null) {
      _say('Tap again in time with the beat.');
      return;
    }
    _setBpm(tempo);
    // Announce once the tapping settles, not on every tap.
    _tapTimer = setTimeout((() => _say('Tempo set to $bpm BPM.')).toJS, 900);
  }

  void _say(String message) => status.textContent = message;
}

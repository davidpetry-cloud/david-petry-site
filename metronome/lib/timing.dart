/// Tempo and rhythm arithmetic for the practice metronome. No browser APIs
/// here, so it runs (and is checked) on the command line as well.
library;

const minBpm = 40;
const maxBpm = 240;

/// How many clicks each beat is split into.
enum Subdivision {
  beats(1),
  eighths(2),
  triplets(3),
  sixteenths(4);

  const Subdivision(this.perBeat);
  final int perBeat;

  static Subdivision byName(String name) =>
      values.firstWhere((s) => s.name == name, orElse: () => beats);
}

/// The three click sounds: the first beat of the bar, any other beat,
/// and the quieter clicks in between.
enum Pulse { accent, beat, sub }

int clampBpm(num bpm) => bpm.round().clamp(minBpm, maxBpm);

double secondsPerPulse(int bpm, Subdivision sub) => 60 / bpm / sub.perBeat;

/// [index] counts pulses from the start of the bar.
Pulse pulseAt(int index, Subdivision sub, {required bool accentFirst}) {
  if (index % sub.perBeat != 0) return Pulse.sub;
  return index == 0 && accentFirst ? Pulse.accent : Pulse.beat;
}

/// Which beat of the bar (from 0) a pulse falls in.
int beatOf(int index, Subdivision sub) => index ~/ sub.perBeat;

/// Turns taps into a tempo: the average gap over the last few taps. A pause
/// longer than [resetAfterMs] starts a fresh count.
class TapTempo {
  TapTempo({this.resetAfterMs = 2000, this.window = 4});

  final double resetAfterMs;
  final int window;
  final _taps = <double>[];

  /// Returns the tempo once there are two taps, otherwise null.
  int? tap(double nowMs) {
    if (_taps.isNotEmpty && nowMs - _taps.last > resetAfterMs) _taps.clear();
    _taps.add(nowMs);
    if (_taps.length > window + 1) _taps.removeAt(0);
    if (_taps.length < 2) return null;
    final gap = (_taps.last - _taps.first) / (_taps.length - 1);
    return clampBpm(60000 / gap);
  }
}

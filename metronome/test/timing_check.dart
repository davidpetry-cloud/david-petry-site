// Checks the metronome's arithmetic with no packages to install:
//   dart run metronome/test/timing_check.dart
import 'dart:io';

import 'package:metronome/timing.dart';

var failures = 0;

void check(String what, Object? got, Object? want) {
  if (got == want) return;
  failures++;
  stderr.writeln('FAIL $what: got $got, want $want');
}

void main() {
  check('clamp low', clampBpm(12), 40);
  check('clamp high', clampBpm(400), 240);
  check('round', clampBpm(96.6), 97);

  check('quarter at 60', secondsPerPulse(60, Subdivision.beats), 1.0);
  check('eighth at 120', secondsPerPulse(120, Subdivision.eighths), 0.25);
  check('sixteenth at 60', secondsPerPulse(60, Subdivision.sixteenths), 0.25);

  const s = Subdivision.triplets;
  check('downbeat accented', pulseAt(0, s, accentFirst: true), Pulse.accent);
  check('downbeat plain', pulseAt(0, s, accentFirst: false), Pulse.beat);
  check('triplet inner', pulseAt(1, s, accentFirst: true), Pulse.sub);
  check('beat 2 of triplets', pulseAt(3, s, accentFirst: true), Pulse.beat);
  check('beat index', beatOf(7, s), 2);

  check('byName', Subdivision.byName('sixteenths'), Subdivision.sixteenths);
  check('byName fallback', Subdivision.byName('nope'), Subdivision.beats);

  final taps = TapTempo();
  check('one tap', taps.tap(0), null);
  check('two taps at 500ms', taps.tap(500), 120);
  check('steady taps', taps.tap(1000), 120);
  check('long pause resets', taps.tap(5000), null);
  check('after reset', taps.tap(5600), 100);

  if (failures > 0) exit(1);
  print('All metronome checks passed.');
}

#!/bin/sh
# Checks the metronome, then compiles it to ../metronome.js for the site.
# Run from anywhere: sh metronome/build.sh
set -e
cd "$(dirname "$0")"
dart pub get --offline >/dev/null
dart analyze --fatal-infos
dart run test/timing_check.dart
dart compile js -O2 --no-source-maps -o ../metronome.js web/main.dart
rm -f ../metronome.js.deps

#!/usr/bin/env bash
# Cloud environment setup: Node packages (with bundled Chrome), ffmpeg, Devanagari fonts
set -e
cd "$(dirname "$0")"
npm ci --no-audit --no-fund || npm install --no-audit --no-fund
if ! command -v ffmpeg >/dev/null 2>&1; then
  (sudo apt-get update -qq && sudo apt-get install -y -qq ffmpeg fonts-noto-core curl) || (apt-get update -qq && apt-get install -y -qq ffmpeg fonts-noto-core curl)
fi
node tools/check-setup.js

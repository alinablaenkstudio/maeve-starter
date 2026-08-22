#!/usr/bin/env bash
# OG-Image erzeugen: 1200x630 JPG aus einem Hero-Bild, mit Farb-Overlay.
#
#   ./scripts/make-og.sh public/images/hero.jpg "rgba(78,45,125,0.72)"
#
# Kein opengraph-image.tsx verwenden — Next.js ImageResponse liefert ~800KB PNG,
# WhatsApp lehnt das ab und zeigt stattdessen das Favicon.
set -euo pipefail

SRC="${1:?Pfad zum Quellbild angeben}"
OVERLAY="${2:-rgba(0,0,0,0.45)}"
OUT="public/og-social.jpg"

magick "$SRC" \
  -resize 1200x630^ \
  -gravity center -extent 1200x630 \
  -fill "$OVERLAY" -draw "rectangle 0,0 1200,630" \
  -quality 82 \
  "$OUT"

echo "→ $OUT ($(du -h "$OUT" | cut -f1))"

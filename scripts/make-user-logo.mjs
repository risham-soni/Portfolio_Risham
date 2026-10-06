import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function main() {
  const src = 'C:/Users/risha/.gemini/antigravity/brain/5236a812-416a-4ca9-9883-ee78070bce79/.user_uploaded/media_1791263010853.png';
  const pubDir = 'C:/Users/risha/OneDrive/Desktop/portfolio/public';
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // 1. Segment outer white background via BFS
  const isDark = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    if (data[i * 4] < 120 && data[i * 4 + 1] < 120 && data[i * 4 + 2] < 120) {
      isDark[i] = 1;
    }
  }

  const isOuter = new Uint8Array(w * h);
  const queue = [];
  for (let x = 0; x < w; x++) {
    if (!isDark[x]) { isOuter[x] = 1; queue.push(x); }
    let bIdx = (h - 1) * w + x;
    if (!isDark[bIdx] && !isOuter[bIdx]) { isOuter[bIdx] = 1; queue.push(bIdx); }
  }
  for (let y = 0; y < h; y++) {
    let lIdx = y * w;
    if (!isDark[lIdx] && !isOuter[lIdx]) { isOuter[lIdx] = 1; queue.push(lIdx); }
    let rIdx = y * w + (w - 1);
    if (!isDark[rIdx] && !isOuter[rIdx]) { isOuter[rIdx] = 1; queue.push(rIdx); }
  }

  let head = 0;
  while(head < queue.length) {
    let curr = queue[head++];
    let cx = curr % w, cy = Math.floor(curr / w);
    const neighbors = [[cx+1, cy], [cx-1, cy], [cx, cy+1], [cx, cy-1]];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        let nIdx = ny * w + nx;
        if (!isDark[nIdx] && !isOuter[nIdx]) {
          isOuter[nIdx] = 1;
          queue.push(nIdx);
        }
      }
    }
  }

  // Original avatar with transparent outer background
  const originalCutout = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    if (isOuter[i]) {
      originalCutout[i * 4 + 3] = 0;
    } else {
      originalCutout[i * 4] = data[i * 4];
      originalCutout[i * 4 + 1] = data[i * 4 + 1];
      originalCutout[i * 4 + 2] = data[i * 4 + 2];
      originalCutout[i * 4 + 3] = 255;
    }
  }

  const size = 512;

  // Modern Dark Cyberpunk squircle with white circular disc inside holding the user avatar
  const svgBadge = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="discBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#08080c" />
      </linearGradient>
      <linearGradient id="discBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" />
        <stop offset="100%" stop-color="#818cf8" />
      </linearGradient>
    </defs>
    <rect x="14" y="14" width="484" height="484" rx="116" fill="url(#discBg)" stroke="url(#discBorder)" stroke-width="16" />
    <circle cx="256" cy="256" r="208" fill="#ffffff" />
  </svg>`;

  const avatarResized = await sharp(originalCutout, { raw: { width: w, height: h, channels: 4 } })
    .resize(365, 334, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Master 512x512 logo buffer
  const masterLogo = await sharp(Buffer.from(svgBadge.trim()))
    .composite([{ input: avatarResized, top: 100, left: 74 }])
    .png()
    .toBuffer();

  // Write public assets
  await sharp(masterLogo).toFile(path.join(pubDir, 'logo.png'));
  await sharp(masterLogo).resize(180, 180).toFile(path.join(pubDir, 'apple-touch-icon.png'));
  await sharp(masterLogo).resize(64, 64).toFile(path.join(pubDir, 'favicon.png'));
  await sharp(masterLogo).resize(32, 32).toFile(path.join(pubDir, 'favicon-32x32.png'));

  // Create favicon.svg with embedded base64 PNG
  const base64Png = masterLogo.toString('base64');
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <image href="data:image/png;base64,${base64Png}" width="256" height="256"/>
</svg>
`;
  fs.writeFileSync(path.join(pubDir, 'favicon.svg'), faviconSvg, 'utf-8');

  console.log('All public logo and favicon assets created successfully!');
}

main().catch(console.error);

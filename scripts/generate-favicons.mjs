import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Modern, crisp, bold geometric "A" vector icon
// High contrast neon lime (#BAFF02) on deep dark (#090D16) background
// Using pure SVG paths so it doesn't depend on system fonts
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141923"/>
      <stop offset="100%" stop-color="#05070B"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4FF38"/>
      <stop offset="100%" stop-color="#9EE000"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#BAFF02" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Base rounded squircle -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  
  <!-- Subtle border to stand out on dark/light search backgrounds -->
  <rect x="8" y="8" width="496" height="496" rx="104" fill="none" stroke="#BAFF02" stroke-width="12" stroke-opacity="0.4"/>

  <!-- Stylized Geometric 'A' (Anwar Ali Sehar) -->
  <g filter="url(#glow)">
    <!-- Main A Body -->
    <path d="M256 76 L396 420 L318 420 L288 340 L224 340 L194 420 L116 420 Z M256 186 L238 280 L274 280 Z" 
          fill="url(#accentGrad)" 
          stroke="#05070B" 
          stroke-width="4" 
          stroke-linejoin="round"/>
    <!-- Modern tech accent notch on the crossbar -->
    <rect x="226" y="324" width="60" height="18" rx="9" fill="#090D16"/>
    <circle cx="256" cy="333" r="6" fill="#BAFF02"/>
  </g>
</svg>`;

function buildIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size of image
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write master SVG
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
  console.log('Saved public/favicon.svg');

  const svgBuffer = Buffer.from(svgContent);

  // Generate PNG sizes
  const sizes = [16, 32, 48, 96, 180, 192, 512];
  const pngResults = {};

  for (const size of sizes) {
    const png = await sharp(svgBuffer)
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer();
    pngResults[size] = png;
  }

  // Save specific standard files
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), pngResults[16]);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), pngResults[32]);
  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), pngResults[48]);
  fs.writeFileSync(path.join(publicDir, 'favicon-96x96.png'), pngResults[96]);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngResults[180]);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), pngResults[192]);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), pngResults[512]);

  // Generate multi-resolution ICO file (16, 32, 48)
  const icoBuffer = buildIco([
    { width: 16, height: 16, buffer: pngResults[16] },
    { width: 32, height: 32, buffer: pngResults[32] },
    { width: 48, height: 48, buffer: pngResults[48] }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Successfully created all favicon PNGs and favicon.ico in /public!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

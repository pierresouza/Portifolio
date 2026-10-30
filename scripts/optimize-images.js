const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetFiles = [
  'public/powermanutencao.png',
  'public/cineseFilmes.png',
  'public/levite.png',
  'public/seikopartners.png',
  'public/DescoInvest.png',
  'public/portifolio.png',
  'public/RocketVisuals.png',
  'public/certificados/certificado-build-withai.png',
  'public/certificados/certificado abeinfo.png',
  'public/certificados/certificado buildwithai.png'
];

async function run() {
  console.log('=== Optimizing images with sharp ===');
  let totalSaved = 0;
  for (const relPath of targetFiles) {
    const fullPath = path.resolve(relPath);
    if (!fs.existsSync(fullPath)) continue;
    const initialSize = fs.statSync(fullPath).size;
    const tempOut = fullPath + '.tmp.png';
    
    try {
      await sharp(fullPath)
        .resize({ width: 1400, withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9, effort: 7 })
        .toFile(tempOut);
        
      const newSize = fs.statSync(tempOut).size;
      fs.renameSync(tempOut, fullPath);
      const saved = initialSize - newSize;
      totalSaved += saved;
      const pct = ((saved / initialSize) * 100).toFixed(1);
      console.log(`✓ ${relPath}: ${(initialSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB (-${pct}%)`);
    } catch (err) {
      console.error(`Error on ${relPath}:`, err.message);
      if (fs.existsSync(tempOut)) fs.unlinkSync(tempOut);
    }
  }
  console.log(`=== Total saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB! ===`);
}

run();


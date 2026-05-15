/**
 * Convertor imagini → WebP
 * Folosire:
 *   node scripts/convert-to-webp.js [folder] [calitate]
 *
 * Exemple:
 *   node scripts/convert-to-webp.js                          → converteste public/images/
 *   node scripts/convert-to-webp.js C:\Users\anaka\Downloads → converteste Downloads/
 *   node scripts/convert-to-webp.js . 85                    → calitate 85%
 *
 * Suporta: .jpg, .jpeg, .png, .bmp, .tiff, .gif
 * Output:  acelasi folder, acelasi nume, extensie .webp
 */

const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');

const SUPPORTED = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', '.gif'];

async function convertFile(inputPath, quality) {
  const ext     = path.extname(inputPath).toLowerCase();
  const dir     = path.dirname(inputPath);
  const base    = path.basename(inputPath, ext);
  const outPath = path.join(dir, base + '.webp');

  // Skip if already converted (webp exists and is newer)
  if (fs.existsSync(outPath)) {
    const srcMtime = fs.statSync(inputPath).mtimeMs;
    const dstMtime = fs.statSync(outPath).mtimeMs;
    if (dstMtime >= srcMtime) {
      return { path: outPath, status: 'skip', originalKB: 0, webpKB: 0 };
    }
  }

  const originalKB = Math.round(fs.statSync(inputPath).size / 1024);

  await sharp(inputPath)
    .webp({ quality, effort: 4 })
    .toFile(outPath);

  const webpKB = Math.round(fs.statSync(outPath).size / 1024);
  const saving = Math.round((1 - webpKB / originalKB) * 100);

  return { path: outPath, status: 'converted', originalKB, webpKB, saving };
}

function findImages(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(full));
    } else if (SUPPORTED.includes(path.extname(entry.name).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  const args    = process.argv.slice(2);
  const folder  = args[0] || path.join(__dirname, '..', 'public', 'images');
  const quality = parseInt(args[1] ?? '82', 10);

  const absFolder = path.resolve(folder);
  console.log('\n🔄 Convertor JPG/PNG → WebP');
  console.log(`📁 Folder: ${absFolder}`);
  console.log(`⚙️  Calitate WebP: ${quality}%\n`);

  const images = findImages(absFolder);
  if (images.length === 0) {
    console.log('Nu s-au găsit imagini de convertit.');
    return;
  }

  console.log(`Imagini găsite: ${images.length}\n`);

  let converted = 0, skipped = 0, saved = 0, total = 0;

  for (const img of images) {
    process.stdout.write(`  ${path.relative(absFolder, img).padEnd(50)}`);
    try {
      const res = await convertFile(img, quality);
      if (res.status === 'skip') {
        process.stdout.write(`SKIP (webp există)\n`);
        skipped++;
      } else {
        const arrow = res.saving > 0 ? '↓' : '↑';
        process.stdout.write(`${res.originalKB}KB → ${res.webpKB}KB  ${arrow}${Math.abs(res.saving)}%\n`);
        saved += (res.originalKB - res.webpKB);
        total += res.originalKB;
        converted++;
      }
    } catch (err) {
      process.stdout.write(`EROARE: ${err.message}\n`);
    }
  }

  console.log('\n──────────────────────────────────');
  console.log(`✅ Convertite: ${converted}  |  Sărite: ${skipped}`);
  if (converted > 0) {
    const pct = Math.round((saved / total) * 100);
    const sign = saved > 0 ? '-' : '+';
    console.log(`📦 Economie spațiu: ${sign}${Math.abs(saved)}KB (${pct}%)`);
  }
  console.log('');
}

main().catch(console.error);

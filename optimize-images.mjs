import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const imagePath = path.join(__dirname, 'src/assets/images/project/pos-coffee/coffee-pos.png');
const outputPath = path.join(__dirname, 'src/assets/images/project/pos-coffee/coffee-pos-opt.png');

try {
  const info = await sharp(imagePath)
    .resize(1200, null, { withoutEnlargement: true })
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(outputPath);
  
  console.log('Original: 1.5MB');
  console.log('Optimized:', Math.round(info.size / 1024), 'KB');
  console.log('Dimensions:', info.width, 'x', info.height);
  
  // Replace original
  const fs = await import('fs');
  fs.renameSync(outputPath, imagePath);
  console.log('Replaced original file.');
} catch (e) {
  console.error('Error:', e.message);
}

// Genera la portada por defecto del blog (la que lleva un artículo sin imagen propia):
// la foto de la portada en gris, fundida con el azul de la web y el logo en blanco delante.
// Uso: node scripts/blog-portada-por-defecto.mjs
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const OUT = 'src/assets/blog-portada-por-defecto.webp';

const photo = await sharp('src/assets/raul-cabrera-portada.jpg')
  .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'right' })
  .grayscale()
  .linear(1.05, -6)
  .toBuffer();

// Mismo degradado que el prototipo: tinta a la izquierda, acento a la derecha.
const fade = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
    <stop offset="0" stop-color="#0e2a3b" stop-opacity="0.96"/>
    <stop offset="0.38" stop-color="#0e2a3b" stop-opacity="0.86"/>
    <stop offset="0.7" stop-color="#0f7c8c" stop-opacity="0.62"/>
    <stop offset="1" stop-color="#0f7c8c" stop-opacity="0.48"/>
  </linearGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>`;

const logoWidth = Math.round(WIDTH * 0.46);
const logo = await sharp(Buffer.from(readFileSync('src/assets/raul-cabrera-logo.svg', 'utf8').replaceAll('currentColor', '#ffffff')))
  .resize({ width: logoWidth })
  .png()
  .toBuffer();
const { height: logoHeight } = await sharp(logo).metadata();

await sharp({ create: { width: WIDTH, height: HEIGHT, channels: 3, background: '#0e2a3b' } })
  .composite([
    { input: photo },
    { input: Buffer.from(fade) },
    { input: logo, left: Math.round(WIDTH * 0.07), top: Math.round((HEIGHT - logoHeight) / 2) },
  ])
  .webp({ quality: 85 })
  .toFile(OUT);

console.log(`Portada por defecto: ${OUT}`);

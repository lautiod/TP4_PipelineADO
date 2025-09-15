/**
 * En proyectos Node puros, "build" suele ser un no-op (a menos que usemos TypeScript).
 * Este script simplemente prepara un directorio "build" con los archivos necesarios
 * para publicar como artefacto en CI (src + package.json + package-lock si existiera).
 */
import fs from 'node:fs'
import path from 'node:path'

const out = 'build'
if (!fs.existsSync(out)) fs.mkdirSync(out)
for (const item of ['src', 'package.json']) {
  const src = path.join(process.cwd(), item)
  const dest = path.join(process.cwd(), out, item)
  if (fs.lstatSync(src).isDirectory()) {
    fs.cpSync(src, dest, { recursive: true })
  } else {
    fs.copyFileSync(src, dest)
  }
}
console.log('Build listo en /build')

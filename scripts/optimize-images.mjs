import sharp from "sharp"
import fs from "node:fs"
import path from "node:path"

async function toWebp(input, { maxW, q }) {
    const before = fs.statSync(input).size
    const buf = await sharp(input)
        .resize(maxW, null, { withoutEnlargement: true })
        .webp({ quality: q, effort: 6 })
        .toBuffer()
    const out = input.replace(/\.png$/i, ".webp")
    fs.writeFileSync(out, buf)
    console.log(`${input} -> ${path.basename(out)}  ${Math.round(before / 1024)}KB -> ${Math.round(buf.length / 1024)}KB`)
}

const targets = [
    ["public/perfil.png", { maxW: 800, q: 82 }],
    ["public/images/projects/asset.png", { maxW: 1000, q: 78 }],
    ["public/images/projects/ceela.png", { maxW: 1000, q: 78 }],
    ["public/images/projects/deuman.png", { maxW: 1000, q: 78 }],
    ["public/images/projects/fixmantech.png", { maxW: 1000, q: 78 }],
    ["public/images/projects/peditodomajes.png", { maxW: 1000, q: 78 }],
    ["public/images/icon.png", { maxW: 256, q: 90 }],
]

for (const [file, opts] of targets) {
    await toWebp(file, opts)
}

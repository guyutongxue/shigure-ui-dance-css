const buf = Buffer.from(await Bun.file("./part1-small.webp").arrayBuffer())

console.log(`data:image/webp;base64,${buf.toString("base64")}`)

export {};
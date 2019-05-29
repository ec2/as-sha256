const wasm = require('./index.js')
const sha256 = require('js-sha256')
const f = new wasm.SHA256()
const c = f.doIT()

const h = sha256.update([0x97, 0x98, 0x99])

console.log(c)
console.log(h.array())

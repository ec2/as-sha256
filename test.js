const wasm = require('./index.js')
const sha256 = require('js-sha256')
const f = new wasm.SHA256()

// const h = sha256.update([0x97, 0x98, 0x99])
// console.log(c)
// let aaa = h.array();
// console.log(h.array())
// console.log(`length ${aaa.length}`)


// JS SHA256
var hash = sha256.create();
hash.update([97,98,99]);  // ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
//hash.update([97,98,99]) // ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
//hash.update([97,98,99,0]) // 4e850d592edcdc15c8f16babb52163d40c4c40042cb6f0c2f28eee880b24a3aa
//let jshash = hash.hex(); // length: 64
let jshash = hash.array(); // length: 32

console.log(`js-sha256 `, toHexString(jshash));



 const c = f.doIT()
 console.log(`as-sha256 `, toHexString(wasm.getArray(Uint8Array, c)))

// console.log(wasm.experiment());

function toHexString(byteArray) {
    return byteArray.reduce((output, elem) => 
      (output + ('0' + elem.toString(16)).slice(-2)),
      '');
  }


const ts = new wasm.ts256();
ts.update('abc',3)
const res = ts.digest()
console.log(`as-sha256-fast `, toHexString(wasm.getArray(Uint8Array, res)))
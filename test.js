const wasm = require("./index.js")
// var proto = Object.getPrototypeOf(wasm);
// console.log(wasm.add(1,2))
// console.log(wasm)
// let ptr = wasm.getK();
// console.log(ptr);
// console.log(wasm.getArray(Uint32Array, ptr))

// var arr = [1, 2, 3, 4, 5, 0x7fffffff];
// let ptr = wasm.newArray(new Int32Array(arr));

// console.log(wasm.getArray(Int32Array, ptr))
//const f = new wasm.Node(20, wasm.newString("boo"), null);
console.log(wasm)
const f = new wasm.SHA256();
const h = f.doIT();
// console.log(f.doIT())
// console.log(wasm.getArray(f.doIT()))

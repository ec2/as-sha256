// The entry file of your WebAssembly module.

import { sha256 } from 'js-sha256';

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function hsh(): String{
  return sha256("asf")
}

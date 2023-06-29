let s1 = Symbol("str");
let s2 = Symbol("str");

console.log(`s1 === s2 => ${s1 === s2}`); // => false
console.log(`s1.toString() === s2.toString() => ${s1.toString() === s2.toString()}`); // => true


let s = Symbol.for("shared");
let t = Symbol.for("shared");

console.log(`s === t => ${s === t}`); // => true
console.log(`Symbol.keyFor("s") => ${Symbol.keyFor(s)}`); // => "shared"

"use strict";
// 操作符
// ? :
function abs(x) {
    console.log(x > 0? x : -x);
}
console.log(abs(-13));

console.log();

// ??
let options = {
    timeout: 0,
    title: "",
    verbose: false,
    n: null
};

console.log(options.timeout ?? 1000);       // => 0
console.log(options.title ?? "Undefined");  // => ""
console.log(options.verbose ?? true);       // => false
console.log(options.quite ?? false);        // => false
console.log(options.n ?? 10);               // => 10

// a ?? b || c  SyntaxError: 必须有()

console.log();

// typeof
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof true);
console.log(typeof NaN);
console.log(typeof 1666n);
console.log(typeof "str");
console.log(typeof Symbol("symbol"));
console.log(typeof function f() { });
console.log(typeof null);

console.log();

// delete
let o = {
    x: 1,
    y: 2
};

console.log(delete o.x);    // => true
console.log(o.x);           // => undefinde

console.log(delete 1);      // => true 无意义

let a = [1, 2, 3];
delete a[2];
console.log(2 in a);        // => false
console.log(a.length);      // => 3 数组长度不变

console.log();

// false 严格模式报错 TypeError
// console.log(delete o);
// console.log(delete Object.prototype);

// await async

// void
let counter = 0;

console.log(counter);
const increment = () => void counter++;
increment();
console.log(counter);

// ,
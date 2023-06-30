// for/of
// 数组
let data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0

for (let element of data) {
    sum += element;
}
console.log(sum);   // 45


// 对象
let o = {
    x: 1,
    y: 2,
    z: 3
};

let keys = "";
for (let k of Object.keys(o)) {
    keys += k;
}
console.log(keys);      // xyz

let values = "";
for (let v of Object.values(o)) {
    values += v;
}
console.log(values);    // 123

let pairs = "";
for (let [k, v] of Object.entries(o)) {
    pairs += `${k}: ${v}  `;
}
console.log(pairs);     // x: 1  y: 2  z: 3


// 字符串
let frequency = {};
for (let letter of "mississippi") {
    if (frequency[letter] !== undefined) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
console.log(frequency); //{ m: 1, i: 4, s: 4, p: 2 }


// Set和Map
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];

for (let word of wordSet) {
    unique.push(word);
}
console.log(unique);    // [ 'Na', 'na', 'Batman!' ]

let m = new Map([[1, "one"], [2, "two"], [3, "three"]]);
for (let [k, v] of m) {
    console.log(`${k}: ${v}  `);
}


// for/await 与 异步迭代    ES2018  chap 12/13
async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk);
    }
}


// for/in
for (let p in o) {
    console.log(p);
}
// x
// y
// z

let a = [], i = 0
// 枚举属性名字
for (a[i++] in o);
console.log(a); // [ 'x', 'y', 'z' ]

for (let i in a) {
    console.log(i);
}
// 枚举索引值 0 1 2
// 0
// 1
// 2

for (let i in o) {
    console.log(`${i}: ${o[i]}`);
}
// x: 1
// y: 2
// z: 3
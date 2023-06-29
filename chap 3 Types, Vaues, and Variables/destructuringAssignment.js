//  Destructuring Assignment
// 解构赋值

// let [x, y] = [1, 2];        // same as let x = 1, y = 2
// [x, y] = [x + 1, y + 1];    // same as let x = x + 1, y = y + 1
// [x, y] = [y, x];            // swap x, y
// console.log([x, y]);

// for循环
// let o = {
//     x: 1,
//     y: 2
// }

// for (const [x, y] of Object.entries(o)) {
//     console.log(`${x}: ${y}`);
//     // x: 1
//     // y: 2
// }

// 左右侧变量数量不同的情况
// let [a, b] = [1];    // a == 1; b == undefined
// [a, b] = [1, 2, 3];  // a == 1; b == 2
// [, a, , b] = [1, 2, 3, 4];   // a == 2, y == 4
// console.log(a, b);

// 数组解构
// ... 要求可以使用for/of迭代

// let [f, [g, h], [j]] = [1, [2, 3], [4]];
// console.log(f, g, h, j);    // 1, 2, 3, 4

// let [c, ...d] = [1, 2, 3, 4];
// console.log(`c = ${c}`);    // 1
// console.log(`d = ${d}`);    // 2,3,4

// let [first, ...rest] = "hello";
// console.log(`first = ${first}`);    // h
// console.log(`rest = ${rest}`);      // e,l,l,o

// 对象的解构赋值
// let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };
// let { r, g, b } = transparent;      // r == 0.0; g == 0.0; b == 0.0
// console.log(transparent);
// console.log(r, g, b);

// const { sin, cos, tan } = Math;
// console.log(sin, cos, tan);

// const cosine = Math.cos; const tangent = Math.tan
// const { cos: cosine, tan: tangent } = Math;
// console.log(cosine, tangent);

// 复杂解构赋值
let points = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
let [{ x1, y1 }, { x2, y2 }] = points;
console.log(`points = ${points}`);
console.log(`[{ x1, y1 }, { x2, y2 }] = ${[{ x1, y1 }, { x2, y2 }]}`);
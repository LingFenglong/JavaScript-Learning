// if 语句将 undefined 转换为 false，但 == 操作符永远不会将其操作数转换为布尔值。
console.log(null == undefined);     // => true  0 == 0
console.log("0" == 0);              // => true  0 == 0
console.log(0 == false);            // => true  0 == 0
console.log("0" == false);          // => true  0 == 0

// 显示转化
console.log(Number("3"));           // => 3
console.log(String(false));         // => false
console.log(Boolean([]));           // => true

let n = 17;
let binary = "0b" + n.toString(2);
let octal = "0o" + n.toString(8);
let hex = "0x" + n.toString(16);
console.log(binary, octal, hex);

let m = 123456.789; // 截断
// 保留几位小数
console.log(m.toFixed(0));
console.log(m.toFixed(2));
console.log(m.toFixed(5));
// 科学计数法表示 有效位数
console.log(m.toExponential(1));
console.log(m.toExponential(3));
// 保留有效为数
console.log(m.toPrecision(4));
console.log(m.toPrecision(7));
console.log(m.toPrecision(10));

console.log(parseInt("1 yuan"));
console.log(parseFloat(".1"));

// valueOf();
// toString();

// [] --> "" --> 0
// [1] --> "1" --> 1
// ["a"] --> "a"
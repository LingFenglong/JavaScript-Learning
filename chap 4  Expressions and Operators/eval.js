// eval()  解释JavaScript源代码字符串
// 可能会造成安全漏洞

// let res = eval("5 + 4");    // => 9
// console.log(res);

const geval = eval;
let x = "global", y = "global";

function f() {
    let x = "local";
    eval("x += 'changed';");
    return x;
}

function g() {
    let y = "local";
    geval("y += 'changed';");   // 严格模式 报错了
    return y;
}

console.log(f(), x);
console.log(g(), y);
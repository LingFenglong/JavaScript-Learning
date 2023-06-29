// 定义函数
let square = function (x) {
    return x ** 2;
}
console.log(square(10));

let increment = function (x) {
    return ++x;
}

let print = function (text) {
    console.log(text);
}
print("ni hao");

let option = function (x, op) {
    return op?.(x);
}
console.log(option(10, square));
console.log(option(10, increment));

/*
 * o.m()
 * o?.m()
 * o.m?.()
 */
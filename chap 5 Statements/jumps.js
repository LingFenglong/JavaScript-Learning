// 跳转语句
let a = [1, 2, 3, 4, 5];
let i = 0, sum = 0;
mainloop: while (i < a.length) {
    if (a[i] === 3) {
        i++;
        continue mainloop;
    } 
    sum += a[i];
    i++;
}
console.log(sum);   // 12

forLoop:
for (let n of a) {
    for (let m of a) {
        if (n === 3) {
            break forLoop;
        }
        console.log(n, m);
    }
}

// yield 回送生成值序列的下一个值，同时不会真正返回
function* range(from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}

// throw
function factorial(x) {
    if (x < 0) {
        throw new RangeError("x must not be negative");
    }
    let res = 1;
    for (res = 1; x > 1; x--) {
        res *= x;
    }
    return res;
}

console.log(factorial(3));  // => 6
console.log(factorial(4));  // => 24
console.log(factorial(5));  // => 120
// console.log(factorial(-7)); // RangeError

// try/catch/finally    浏览器运行
// try {
//     let n = Number(prompt("Enter a positive number: ", ""));
//     alert(`${n}! = ${factorial(n)}`);
// } catch (ex) {
//     alert(ex);
// }

// 干捕获子句
function parseJson(s) {
    try {
        return JSON.parse(s);
    } catch {
        // 出错，但是我们不关心错误是什么
        return undefined;
    }
}
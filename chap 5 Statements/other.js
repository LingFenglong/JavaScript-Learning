// with
// document.forms[0].address.value
// with (document.forms[0]) {
//     name.value = "";
//     address.value = "";
//     email.value = "";
// }

// debugger
// debugger语句并不为你打开调试器。
// 如果你使用浏览器并且打开了开发者控制台，这个语句就会导致断点。
let a = [1, 2, 3, 4, 5];
for (let n of a) {
    console.log(n);
    if (n === 3) {
        debugger;
    }
}

// "use strict"
// 开启严格模式
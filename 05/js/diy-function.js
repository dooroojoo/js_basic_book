
function add (a, b) {
    let sum = a + b;
    return sum;
}

var num1 = Number(prompt("첫번째 값을 입력하세요"));
var num2 = Number(prompt("두번째 값을 입력하세요"));

var result = add(num1, num2);

document.write(result);
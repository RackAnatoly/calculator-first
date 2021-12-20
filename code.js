let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let devide = document.getElementById('devide');




function onButtonPlusClick() {
    let valueOne = document.getElementById('numberOne');
    let valueTwo = document.getElementById('numberTwo');

    let a = +valueOne.value;
    let b = +valueTwo.value;

    let summ = a + b;
    console.log(summ)
}

function onButtonMinusClick() {
    let valueOne = document.getElementById('numberOne');
    let valueTwo = document.getElementById('numberTwo');

    let a = +valueOne.value;
    let b = +valueTwo.value;

    let summ = a - b;
    console.log(summ)
}

function onButtonMultiplyClick() {
    let valueOne = document.getElementById('numberOne');
    let valueTwo = document.getElementById('numberTwo');

    let a = +valueOne.value;
    let b = +valueTwo.value;

    let summ = a / b;
    console.log(summ)
}

function onButtonDevideClick() {
    let valueOne = document.getElementById('numberOne');
    let valueTwo = document.getElementById('numberTwo');

    let a = +valueOne.value;
    let b = +valueTwo.value;

    let summ = a * b;
    console.log(summ)
}

plus.addEventListener('click', onButtonPlusClick);
minus.addEventListener('click', onButtonMinusClick);
multiply.addEventListener('click', onButtonMultiplyClick);
devide.addEventListener('click', onButtonDevideClick);


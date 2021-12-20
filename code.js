var operationButtons = document.getElementsByClassName('operation-button');

let input1 = document.getElementById('numberOne');
let input2 = document.getElementById('numberTwo');

function makeOperation(operationCode) {

    let number1 = +input1.value;
    let number2 = +input2.value;

    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('operation is unknown')
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}
for (let i = 0; i < operationButtons.length; i++) {
    let button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}

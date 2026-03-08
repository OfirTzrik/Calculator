const screen = document.querySelector("#screen-text");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y != 0) {
        return x / y;
    }
}

let operand1 = "";
let operand2 = "";
let operator = "";

function operate(operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
        default:
            return "Something went wrong!";
    }
}

const digit_buttons = document.querySelectorAll(".btn");
for (const btn of digit_buttons) {
    btn.addEventListener("click", (event) => {
        operand1 += event.target.textContent;
        screen.textContent = operand1;
    });
}

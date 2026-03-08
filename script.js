const screen = document.querySelector("#screen-text");
const reset_button = document.querySelector("#reset");
const equals = document.querySelector("#equals");

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
    return "ZERO DIVISION ERROR";
}

let operand1 = "";
let operand2 = "";
let operator = "";

// Perform the operation
function operate(operator, operand1, operand2) {
    const num1 = Number(operand1);
    const num2 = Number(operand2);
    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "÷":
            result = divide(num1, num2);
            break;
        default:
            return "Something went wrong!";
    }

    return Math.round(result * 1000) / 1000;

}

const digit_buttons = document.querySelectorAll(".btn-digit");
for (const btn of digit_buttons) {
    btn.addEventListener("click", (event) => {
        operand1 += event.target.textContent;
        screen.textContent = `${operand2} ${operator} ${operand1}`;
    });
}

const op_buttons = document.querySelectorAll(".btn-op");
for (const btn of op_buttons) {
    btn.addEventListener("click", (event) => {
        const nextOperator = event.target.textContent;

        if (operand1 == "" && operand2 == "") {
            screen.textContent = "ERROR";
        } 
        else if (operand1 == "" && operand2 != "") {
            operator = nextOperator;
            screen.textContent = `${operand2} ${operator}`;
        } 
        else if (operand1 != "" && operand2 == "") {
            operand2 = operand1;
            operand1 = "";
            operator = nextOperator;
            screen.textContent = `${operand2} ${operator}`;
        } 
        else if (operand1 != "" && operand2 != "") {
            const result = operate(operator, operand2, operand1);
            operand2 = result.toString();
            operand1 = "";
            operator = nextOperator;
            screen.textContent = `${operand2} ${operator}`;
        }
    });
}

// Reset the calculator
reset_button.addEventListener("click", () => {
    screen.textContent = "";
    operand1 = "";
    operand2 = "";
    operator = "";
});

const decimal_button = document.querySelector("#decimal-point");
decimal_button.addEventListener("click", () => {
    if (!operand1.includes(".")) {
        if (operand1 == "") {
            operand1 = "0.";
        } else {
            operand1 += ".";
        }
        if (operator == "") {
            screen.textContent = operand1;
        } else {
            screen.textContent = `${operand2} ${operator} ${operand1}`;
        }
    }
});

// Perform the calculation when = is pressed
equals.addEventListener("click", () => {
    if (operand1 != "" && operand2 != "" && operator != "") {
        const result = operate(operator, operand2, operand1);
        
        screen.textContent = result;
        operand2 = result.toString();
        operand1 = "";
        operator = "";
    }
});
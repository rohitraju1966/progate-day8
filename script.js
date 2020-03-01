const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

let prevInput = 0;
let calculationOperator = '';
let currentInput = 0;

const inputNumber = (number) => {
    if(currentInput === '0')
    {
        currentInput = number;
    }
    else 
    {
        currentInput += number;
    }
}

numbers.forEach((number) => 
{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentInput);
    })
})

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    prevInput = currentInput;
    calculationOperator = operator;
    currentInput = '0';
}

// operators.addEventListener("click", (event) => {
//     inputOperator(event.target.value);
// })

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentInput);
})

const calculate = () => {
    let result = 0;
    switch(calculationOperator) {
        case '+':
            result = prevInput + currentInput;
            break;
        case '-':
            result = prevInput - currentInput;
            break;
        case 'x':
            result = prevInput * currentInput;
            break;
        case '/':
            result = prevInput / currentInput;
            break;
        default:
            return result;
    }
    currentInput = result.toString();
    calculationOperator = '';
}

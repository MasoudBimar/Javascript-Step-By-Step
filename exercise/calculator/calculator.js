let display = document.getElementById('result');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    if (display.value !== '') {
        const lastChar = display.value.slice(-1);
        if ('+-*/%'.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + operator;
        } else {
            display.value += operator;
        }
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}
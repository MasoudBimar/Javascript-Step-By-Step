function greet(){
    console.log('Hello World')
}

greet();

// ===================================================

function greet2(name){ // name is a funtion parameter
    console.log('Hello ' + name);
}

greet2('masoud'); // 'masoud' is a argumant
greet2('ali'); // 'masoud' is a argumant

function greet3(firstName, lastName){ // name is a funtion parameter
    console.log('Hello ' + firstName + '-' + lastName);
}

greet3('ali', 'karimi');
greet3('ali');

function calculate(number1, number2){
    return number1 + number2;
}

console.log(calculate(1,2)); 
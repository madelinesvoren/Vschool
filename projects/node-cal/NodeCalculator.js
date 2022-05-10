const readlineSync = require('readline-sync');

var num1 = readlineSync.question('Please enter your first number');
// console.log('num1')

var num2 = readlineSync.question('Please enter your second number');
// console.log('num2')

var options = ['add', 'subtract', 'multiply', 'divide']

var operation = readlineSync.keyInSelect(options, 'Please enter the operation to perform');
// console.log(operation)

if(options[operation]=== "add"){
    console.log("The result is " + add(num1, num2))
}
else if(options[operation]=== "subtract"){
    console.log("The result is " + sub(num1, num2))
}
else if(options[operation]=== "multiply"){
    console.log("The result is " + mul(num1, num2))
}
else if(options[operation]==="divide"){
    console.log("The result is " + div(num1, num2))
}
function add(num1, num2){
    return +num1 + +num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function sub(num1, num2){
    return num1 - num2;
}


// function math(num1, num2, operation){
    
//     if(operation ===  '+' || 'add'){
//         console.log(add(num1, num2))

//     } else if (operation ===  '*'){
//         console.log(mul(num1, num2))  
//     } else if (operation  === '/'){
//         console.log(div(num1, num2))
//     } else if(operation ===  '-')
//     {
//         console.log(sub(num1, num2))
// }
//}

//math(num1, num2, operation)
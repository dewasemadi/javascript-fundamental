// function declaration
// function sayHello(greet) {
//     console.log(`${greet}!`);
// }

// function expression
// const sayName = function (name) {
//     console.log(`Nama saya ${name}`)
// }


// arrow function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}

const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

sayName('Semadi');

const multiply = (a, b) => a * b;

let result = multiply(10, 2);
console.log(result);
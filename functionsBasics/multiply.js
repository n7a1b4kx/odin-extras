// takes two number and return their product

// first number

let firstNumber = prompt("Please enter a number");
let SecNumber = prompt("Please enter a number");

// multiplication 

function multiply(firstNumber, SecNumber) {
    /* + is a unary operator used as shorthand for converting string into number as prompt returns user input as string !!! */
    return +firstNumber * +SecNumber;
}

multiply(firstNumber, SecNumber);
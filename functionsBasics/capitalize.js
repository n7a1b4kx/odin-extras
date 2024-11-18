// takes an string and return in title - first letter capitalize

let userInput = prompt("Please enter a valid string:");

function cap(userInput) {
    let capital = userInput[0].toUpperCase();
    capital += userInput.slice(1);
    return capital;
}

cap(userInput);
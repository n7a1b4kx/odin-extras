// returns the last letter of given string 

let userInput = prompt("Please enter a string:");

function lastLetter(userInput) {
    return userInput.charAt(userInput.length -1);
}

lastLetter(userInput);
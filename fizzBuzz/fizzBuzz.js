// creating very first program which is asked in interviews 

// gettin' input 
let userInput = parseInt(prompt("Please enter a number: "));

for (let i = 1; i <= userInput; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIzzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("FIzz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

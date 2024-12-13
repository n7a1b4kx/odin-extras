// using arrays methods to recreate this func

/*
function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
}
*/

// here is my implementation
function isEven(number) {
    return number % 2 === 0;
}

function getTripled(number) {
    return number * 3;
}

function sumOfTripledEvens(array) {
    let arr = array.filter(isEven);
    arr = arr.map(getTripled);
    let sum = arr.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);
    return sum;
}

const arr = [1, 2, 3, 4, 5];

console.log(sumOfTripledEvens(arr));
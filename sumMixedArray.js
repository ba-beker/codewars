// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// The solution
function sumMix(x){
    let total = 0;

    for (let i = 0; i < x.length; i++) {
        total += parseFloat(x[i]);
    }
    return total;
}
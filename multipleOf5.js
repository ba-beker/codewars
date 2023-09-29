// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// the solution
function roundToNext5(n){
    if (n > -5 && n < 0){
      return 0;
    }
    if (n >= 0) {
      // If the number is positive or zero, find the next multiple of 5 greater than or equal to the input.
      return Math.ceil(n / 5) * 5;
    } else {
      // If the number is negative, find the next multiple of 5 less than or equal to the input.
      return Math.floor(n / 5) * 5;
    }
}
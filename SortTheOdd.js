// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// The Solution
function sortArray(array) {
    // Separate odd and even numbers
    const oddNumbers = array.filter(num => num % 2 !== 0);
    const evenNumbers = array.filter(num => num % 2 === 0);
  
    // Sort odd numbers in ascending order
    oddNumbers.sort((a, b) => a - b);
  
    // Combine odd and even numbers to get the final result
    const resultArray = array.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num));
  
    return resultArray;
  }
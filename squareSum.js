// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1**2 + 2**2 + 2**2 = 9

// The solution
function squareSum(numbers){
    if (!Array.isArray(numbers)) {
      return "Input is not an array.";
    }
    
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        return "Array contains non-numeric elements.";
      }
      
      sum += numbers[i] ** 2;
    }
    
    return sum;
  }
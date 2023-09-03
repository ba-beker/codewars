// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// The solution
var uniqueInOrder=function(sequence){
    if (!sequence) return [];
  
    let uniqueArray = [];
    let prevElement = sequence[0];
  
    uniqueArray.push(prevElement);
  
    for (let i = 1; i < sequence.length; i++) {
      if (sequence[i] !== prevElement) {
        uniqueArray.push(sequence[i]);
        prevElement = sequence[i];
      }
    }
  
    return uniqueArray;
  }
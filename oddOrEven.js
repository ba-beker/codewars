// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// The solution

function oddOrEven(array) {
    // If the array is empty, consider it as [0]
   if (array.length === 0) {
     array = [0];
   }
 
   // Calculate the sum of the elements in the array
   const sum = array.reduce((acc, curr) => acc + curr, 0);
 
   // Determine if the sum is odd or even and return the result
   return sum % 2 === 0 ? "even" : "odd";
 }
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// The solution
function take(arr, n) {
  // Use slice to extract the first n elements
  return arr.slice(0, n);
}

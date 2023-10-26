// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// The solution
function repeatStr (n, s) {
    if (typeof n !== 'number' || typeof s !== 'string') {
      return "Invalid input: Please provide a valid number and a string.";
    }
  
    if (n <= 0) {
      return "";
    }
  
    let result = "";
    for (let i = 0; i < n; i++) {
      result += s;
    }
  
    return result;
}
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// The solution
function reverse(string){
    // Remove leading and trailing spaces and split the string into words
    const words = string.trim().split(/\s+/);
  
    // Reverse the array of words and join them with a space
    const reversedStr = words.reverse().join(' ');
  
    return reversedStr;
}
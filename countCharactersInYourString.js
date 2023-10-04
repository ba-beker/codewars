// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// The solution
function count(str) {
    // Create an empty object to store the character counts
    const charCount = {};
  
    // Loop through each character in the string
    for (let char of str) {
      // Check if the character is already in the charCount object
      if (charCount[char]) {
        // If it is, increment the count
        charCount[char]++;
      } else {
        // If it's not, initialize the count to 1
        charCount[char] = 1;
      }
    }
  
    // Return the charCount object
    return charCount;
}
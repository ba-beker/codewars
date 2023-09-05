// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// The solution
function duplicateCount(str){
    // Convert the input string to lowercase to make it case-insensitive
  str = str.toLowerCase();

  // Create an empty object to store the character counts
  const charCount = {};

  // Initialize a variable to keep track of the count of duplicates
  let duplicates = 0;

  // Iterate through each character in the string
  for (let char of str) {
    // Check if the character is alphanumeric
    if (/^[a-z0-9]$/.test(char)) {
      // If the character is not in the charCount object, add it with a count of 1
      if (!charCount[char]) {
        charCount[char] = 1;
      } else {
        // If the character is already in the charCount object, increment its count
        charCount[char]++;

        // If the count becomes 2, increment the duplicates counter
        if (charCount[char] === 2) {
          duplicates++;
        }
      }
    }
  }

  return duplicates;
}
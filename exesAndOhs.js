// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// The solution
function XO(str) {
    // Convert the string to lowercase to make it case-insensitive
    str = str.toLowerCase();
    
    // Initialize counts for 'x' and 'o'
    let xCount = 0;
    let oCount = 0;
    
    // Iterate through the characters in the string
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
        xCount++;
      } else if (str[i] === 'o') {
        oCount++;
      }
    }
    
    // Check if the counts are equal and return the result
    return xCount === oCount;
}
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// The solution
function longest(s1, s2) {
  // Concatenate the two strings and convert the resulting string to an array
  let combinedArray = (s1 + s2).split("");

  // Remove duplicates by creating a Set and then converting it back to an array
  let uniqueArray = [...new Set(combinedArray)];

  // Sort the unique array
  let sortedArray = uniqueArray.sort();

  // Convert the sorted array back to a string
  let resultString = sortedArray.join("");

  return resultString;
}

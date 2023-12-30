// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// The solution
function twoSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    // Handle invalid input
    return "Invalid input";
  }

  // Sort the array alphabetically
  arr.sort();

  // Get the first string from the sorted array
  const firstString = arr[0];

  // Concatenate each letter with "***" in between
  const result = firstString.split("").join("***");

  return result;
}

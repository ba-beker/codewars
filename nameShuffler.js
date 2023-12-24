// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// The solution
function nameShuffler(str) {
  // Split the full name into an array of words
  const nameArray = str.split(" ");

  // Check if there are at least two words (first name and last name)
  if (nameArray.length >= 2) {
    // Swap the first and last names
    const [firstName, lastName, ...rest] = nameArray;
    const swappedNames = [lastName, firstName, ...rest].join(" ");

    return swappedNames;
  } else {
    // Return the original name if it doesn't have both first and last names
    return str;
  }
}

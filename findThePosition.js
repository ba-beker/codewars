// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// The solution
function position(letter) {
  // Convert the letter to uppercase to handle both cases
  var uppercaseLetter = letter.toUpperCase();

  // Get the ASCII code of the letter and calculate the position
  var position = uppercaseLetter.charCodeAt(0) - 64;

  // Check if the input is a valid letter
  if (position >= 1 && position <= 26) {
    return "Position of alphabet: " + position;
  } else {
    return "Invalid input. Please provide a single letter.";
  }
}

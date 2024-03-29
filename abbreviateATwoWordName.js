// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  // Split the name into words
  const words = name.split(" ");

  // Get the first letter of each word, capitalize it, and join with a dot
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join(".");

  return initials;
}

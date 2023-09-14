// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// The solution
function findNeedle(haystack) {
    // Loop through the haystack array
    for (let i = 0; i < haystack.length; i++) {
      // Check if the current element is equal to "needle"
      if (haystack[i] === "needle") {
        // If found, return the message with the index
        return "found the needle at position " + i;
      }
    }
    // If "needle" is not found, return a message indicating that
    return "needle not found";
  }
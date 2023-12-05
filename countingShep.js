// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// The solution
function countSheeps(sheepArray) {
  if (!sheepArray || !Array.isArray(sheepArray)) {
    // Check for bad values like null or non-array input
    return "Invalid input. Please provide an array.";
  }

  let sheepCount = 0;

  for (let i = 0; i < sheepArray.length; i++) {
    // Check if the value is true and not null or undefined
    if (sheepArray[i] === true) {
      sheepCount++;
    }
  }

  return sheepCount;
}

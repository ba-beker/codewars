// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// The solution

function findUniq(arr) {
	const counts = {};
  
	for (let i = 0; i < arr.length; i++) {
	  const num = arr[i];
	  counts[num] = counts[num] ? counts[num] + 1 : 1;
	}
  
	for (let num in counts) {
	  if (counts[num] === 1) {
		return parseFloat(num); // Return the unique number as a float
	  }
	}
  }
  
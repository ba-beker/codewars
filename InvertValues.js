// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// The solution
function invert(array) {
  // Check if the array is empty
  if (array.length === 0) {
    return [];
  }

  // Map each element in the array to its additive inverse
  return array.map((num) => -num);
}

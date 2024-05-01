// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"
// Example 3:

// Input: n = 3, k = 1
// Output: "123"

// Constraints:

// 1 <= n <= 9
// 1 <= k <= n!

// The solution
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  // Function to generate all permutations
  function generatePermutations(nums, path, permutations) {
    // Base case: If path length equals n, add it to permutations
    if (path.length === n) {
      permutations.push(path.join(""));
      return;
    }

    // Iterate through each number in nums
    for (let i = 0; i < nums.length; i++) {
      // Skip if the number is already in the path
      if (path.includes(nums[i])) continue;
      // Add the number to the path
      path.push(nums[i]);
      // Recursive call to generate permutations with the updated path
      generatePermutations(nums, path, permutations);
      // Backtrack by removing the last number from the path
      path.pop();
    }
  }

  // Initialize an array with numbers from 1 to n
  const nums = Array.from({ length: n }, (_, index) => index + 1);
  // Array to store all permutations
  const permutations = [];
  // Generate all permutations
  generatePermutations(nums, [], permutations);
  // Sort permutations in lexicographic order
  permutations.sort();
  // Return the kth permutation
  return permutations[k - 1];
};

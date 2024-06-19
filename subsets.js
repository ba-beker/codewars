// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

// The solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  // Helper function for backtracking
  const backtrack = (start, currentSubset) => {
    // Add the current subset to the result
    result.push([...currentSubset]);

    // Iterate through the elements starting from 'start'
    for (let i = start; i < nums.length; i++) {
      // Include the element at index i
      currentSubset.push(nums[i]);
      // Recur with the next element
      backtrack(i + 1, currentSubset);
      // Backtrack by removing the element at index i
      currentSubset.pop();
    }
  };

  // Initialize the backtracking with an empty subset
  backtrack(0, []);

  return result;
};

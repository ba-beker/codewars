// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

// The solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Initialize the variable to keep track of the furthest index you can reach
  let maxReach = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current index is greater than the furthest index you can reach, return false
    if (i > maxReach) {
      return false;
    }

    // Update the furthest index you can reach
    maxReach = Math.max(maxReach, i + nums[i]);

    // If the furthest index you can reach is the last index, return true
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  // If the loop completes without reaching the last index, return false
  return false;
};

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.

// The solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ones = 0;
  let twos = 0;

  for (const num of nums) {
    // Update ones with bits appearing for the first time or once more,
    // but not those that have already appeared in twos.
    ones = (ones ^ num) & ~twos;

    // Update twos with bits appearing for the second time,
    // but not those that have just been added to ones.
    twos = (twos ^ num) & ~ones;
  }

  return ones;
};

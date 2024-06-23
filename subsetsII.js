// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

// The solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);  // Sort the array to handle duplicates
const result = [];
const subset = [];

const backtrack = (index) => {
    result.push([...subset]);  // Add the current subset to the result

    for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) continue;  // Skip duplicates

        subset.push(nums[i]);  // Include nums[i] in the current subset
        backtrack(i + 1);      // Move to the next element
        subset.pop();          // Exclude nums[i] from the current subset
    }
};

backtrack(0);
return result;
};
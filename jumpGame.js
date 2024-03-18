// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].

// The solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
if (n <= 1) return 0;

let jumps = 1; // Number of jumps needed to reach the end
let farthest = nums[0]; // The farthest index that can be reached with the current number of jumps
let currentEnd = nums[0]; // The current end of the range of indices reachable with the current number of jumps

for (let i = 1; i < n; i++) {
    // If the current index is beyond the range reachable with the current number of jumps,
    // we need an additional jump to reach this index.
    if (i > currentEnd) {
        jumps++;
        currentEnd = farthest;
    }

    // Update the farthest index that can be reached from the current index
    farthest = Math.max(farthest, i + nums[i]);

    // If the end of the array is reachable, return the number of jumps
    if (currentEnd >= n - 1) {
        return jumps;
    }
}

return jumps;
};
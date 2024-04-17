// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

// The solution
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Step 1: Sort the intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Initialize an empty array to store merged intervals
  let merged = [];

  // Step 3: Iterate through the sorted intervals
  for (let interval of intervals) {
    // Step 4: Merge intervals
    if (merged.length === 0 || interval[0] > merged[merged.length - 1][1]) {
      merged.push(interval);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }

  // Step 5: Return the merged intervals
  return merged;
};

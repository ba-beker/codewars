// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

// The solution
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [];
  let maxArea = 0;
  let index = 0;

  while (index < heights.length) {
    // If this bar is higher than the bar at stack top, push it to the stack
    if (
      stack.length === 0 ||
      heights[index] >= heights[stack[stack.length - 1]]
    ) {
      stack.push(index++);
    } else {
      // Pop the top
      let topOfStack = stack.pop();
      // Calculate the area with heights[topOfStack] as the smallest (or minimum height) bar 'h'
      let area =
        heights[topOfStack] *
        (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
      // Update maxArea, if needed
      maxArea = Math.max(maxArea, area);
    }
  }

  // Now pop the remaining bars from stack and calculate area with each popped bar
  while (stack.length > 0) {
    let topOfStack = stack.pop();
    let area =
      heights[topOfStack] *
      (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

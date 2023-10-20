// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// The solution
function solution(nums){
    // Check if the input is null or an empty array
    if (nums === null || nums.length === 0) {
      return [];
    } else {
      // Use the Array.sort() method to sort the array in ascending order
      return nums.sort(function(a, b) {
        return a - b;
      });
    }
}
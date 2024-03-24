// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

// The solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
const visited = new Array(nums.length).fill(false); // Keep track of visited elements to avoid duplicates

// Sort the input array to handle duplicates effectively
nums.sort((a, b) => a - b);

// Define a recursive helper function to generate permutations
function backtrack(current) {
    // Base case: if the current permutation has the same length as the input array, add it to the result
    if (current.length === nums.length) {
        result.push([...current]);
        return;
    }
    
    // Iterate through the elements of the input array
    for (let i = 0; i < nums.length; i++) {
        // Skip duplicate elements or visited elements
        if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
            continue;
        }
        // Mark the current element as visited
        visited[i] = true;
        // Add the current element to the current permutation
        current.push(nums[i]);
        // Recursively call backtrack with the updated permutation
        backtrack(current);
        // Backtrack: remove the last added element and mark it as unvisited
        current.pop();
        visited[i] = false;
    }
}

// Start the backtracking process with an empty permutation
backtrack([]);

return result;
};
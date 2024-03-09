// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

// The solution
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b); // Sort the candidates to handle duplicates
  findCombinations(candidates, target, 0, [], result);
  return result;
}

function findCombinations(
  candidates,
  target,
  start,
  currentCombination,
  result
) {
  if (target === 0) {
    result.push([...currentCombination]); // Found a valid combination
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    // Skip duplicates
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    }

    // Skip if the current candidate exceeds the target
    if (candidates[i] > target) {
      break;
    }

    currentCombination.push(candidates[i]); // Include the current candidate
    findCombinations(
      candidates,
      target - candidates[i],
      i + 1,
      currentCombination,
      result
    );
    currentCombination.pop(); // Backtrack to explore other combinations
  }
}

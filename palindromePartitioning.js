// Given a string s, partition s such that every
// substring
//  of the partition is a
// palindrome
// . Return all possible palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

// The solution
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const currentPartition = [];

  // Helper function to check if a string is a palindrome
  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  // Backtracking function to find all partitions
  const backtrack = (start) => {
    // If we've reached the end of the string, add the current partition to the result
    if (start === s.length) {
      result.push([...currentPartition]);
      return;
    }

    // Explore all possible substrings starting from the current position
    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        // If the substring is a palindrome, add it to the current partition
        currentPartition.push(s.substring(start, end + 1));

        // Recur for the next part of the string
        backtrack(end + 1);

        // Backtrack: remove the last added substring
        currentPartition.pop();
      }
    }
  };

  // Start the backtracking process from the beginning of the string
  backtrack(0);

  return result;
};

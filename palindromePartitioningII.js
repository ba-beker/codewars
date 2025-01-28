// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// .

// Return the minimum cuts needed for a palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
// Example 2:

// Input: s = "a"
// Output: 0
// Example 3:

// Input: s = "ab"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase English letters only.

// The solution
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;

// Helper function to precompute palindrome information
const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));

for (let end = 0; end < n; end++) {
    for (let start = 0; start <= end; start++) {
        if (s[start] === s[end] && (end - start <= 2 || isPalindrome[start + 1][end - 1])) {
            isPalindrome[start][end] = true;
        }
    }
}

// DP array to store the minimum cuts for each substring
const dp = Array(n).fill(Infinity);
dp[0] = 0;

for (let end = 0; end < n; end++) {
    if (isPalindrome[0][end]) {
        dp[end] = 0; // No cuts needed if the whole substring is a palindrome
    } else {
        for (let start = 0; start < end; start++) {
            if (isPalindrome[start + 1][end]) {
                dp[end] = Math.min(dp[end], dp[start] + 1);
            }
        }
    }
}

return dp[n - 1];
};
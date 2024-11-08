// Given two strings s and t, return the number of distinct subsequences of s which equals t.

// The test cases are generated so that the answer fits on a 32-bit signed integer.

 

// Example 1:

// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from s.
// rabbbit
// rabbbit
// rabbbit
// Example 2:

// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from s.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag
 

// Constraints:

// 1 <= s.length, t.length <= 1000
// s and t consist of English letters.

// The solution
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length;
 const n = t.length;

 // Initialize dp array with dimensions (m + 1) x (n + 1) and fill with 0s
 const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

 // Base case: dp[i][0] = 1 for all i, because an empty `t` can be formed in one way
 for (let i = 0; i <= m; i++) {
     dp[i][0] = 1;
 }

 // Fill dp array
 for (let i = 1; i <= m; i++) {
     for (let j = 1; j <= n; j++) {
         if (s[i - 1] === t[j - 1]) {
             dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
         } else {
             dp[i][j] = dp[i - 1][j];
         }
     }
 }

 // Result is the number of ways to form t from s
 return dp[m][n];
};
// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// The solution
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
    return s;
}

let start = 0;
let maxLength = 1;

// Create a 2D array to store whether substrings are palindromes or not
const dp = Array.from({ length: s.length }, () => Array(s.length).fill(false));

// All substrings of length 1 are palindromes
for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
}

// Check substrings of length 2
for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
        dp[i][i + 1] = true;
        start = i;
        maxLength = 2;
    }
}

// Check substrings of length 3 and more
for (let len = 3; len <= s.length; len++) {
    for (let i = 0; i <= s.length - len; i++) {
        const j = i + len - 1;

        if (dp[i + 1][j - 1] && s[i] === s[j]) {
            dp[i][j] = true;
            start = i;
            maxLength = len;
        }
    }
}

return s.substring(start, start + maxLength);
};
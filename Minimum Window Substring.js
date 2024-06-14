// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

// The solution
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // Edge case: if t is longer than s, it's impossible to find such a window
  if (t.length > s.length) return "";

  // Hash maps to store character frequencies
  const tFreq = {};
  const windowFreq = {};

  // Initialize tFreq with character frequencies from t
  for (const char of t) {
    tFreq[char] = (tFreq[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let required = Object.keys(tFreq).length;
  let formed = 0;
  let minLen = Infinity;
  let minStart = 0;

  while (right < s.length) {
    const char = s[right];
    windowFreq[char] = (windowFreq[char] || 0) + 1;

    if (tFreq[char] && windowFreq[char] === tFreq[char]) {
      formed++;
    }

    while (left <= right && formed === required) {
      char = s[left];

      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      windowFreq[char]--;
      if (tFreq[char] && windowFreq[char] < tFreq[char]) {
        formed--;
      }
      left++;
    }
    right++;
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

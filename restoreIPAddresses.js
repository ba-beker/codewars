// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

// Example 1:

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
// Example 2:

// Input: s = "0000"
// Output: ["0.0.0.0"]
// Example 3:

// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

// Constraints:

// 1 <= s.length <= 20
// s consists of digits only.

// The solution
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];

  // Helper function to validate each segment of the IP address
  function isValid(segment) {
    // An empty segment is not valid
    if (segment.length === 0) return false;
    // A segment with more than one digit should not have leading zeros
    if (segment.length > 1 && segment[0] === "0") return false;
    // Convert the segment to a number and check if it's within the valid range
    const num = parseInt(segment);
    return num >= 0 && num <= 255;
  }

  // Helper function for backtracking
  function backtrack(start, path) {
    // If we have placed 3 dots and we are at the end of the string, we have a valid IP address
    if (path.length === 4) {
      if (start === s.length) {
        result.push(path.join("."));
      }
      return;
    }

    // Try placing a dot at different positions
    for (let i = start; i < s.length && i < start + 3; i++) {
      const segment = s.substring(start, i + 1);
      if (isValid(segment)) {
        path.push(segment);
        backtrack(i + 1, path);
        path.pop(); // Backtrack to try the next position
      }
    }
  }

  backtrack(0, []);
  return result;
};

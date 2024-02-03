// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// The solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Create a stack to keep track of open brackets
const stack = [];

// Define a mapping for matching brackets
const bracketMap = {
    '(': ')',
    '{': '}',
    '[': ']'
};

// Iterate through each character in the input string
for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character is an open bracket, push it onto the stack
    if (bracketMap[char]) {
        stack.push(char);
    } else {
        // If the character is a closing bracket
        // Pop the last element from the stack and check if it matches
        const lastBracket = stack.pop();

        // If the brackets do not match, return false
        if (bracketMap[lastBracket] !== char) {
            return false;
        }
    }
}

// After iterating through the string, the stack should be empty if the string is valid
return stack.length === 0;
};
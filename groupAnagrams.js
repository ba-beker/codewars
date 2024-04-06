// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// The solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = {};

  // Iterate through each string in the array
  for (let str of strs) {
    // Sort the characters of the string to create a unique key for anagrams
    const sortedStr = str.split("").sort().join("");

    // If the sorted string is already in the hash, push the original string to its corresponding array
    // Otherwise, create a new key with the sorted string and initialize its array with the original string
    if (hash[sortedStr]) {
      hash[sortedStr].push(str);
    } else {
      hash[sortedStr] = [str];
    }
  }

  // Convert the values of the hash map into an array and return it
  return Object.values(hash);
};

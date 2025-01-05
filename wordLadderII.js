// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
// Explanation: There are 2 shortest transformation sequences:
// "hit" -> "hot" -> "dot" -> "dog" -> "cog"
// "hit" -> "hot" -> "lot" -> "log" -> "cog"
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: []
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:

// 1 <= beginWord.length <= 5
// endWord.length == beginWord.length
// 1 <= wordList.length <= 500
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.
// The sum of all shortest transformation sequences does not exceed 105.

// The solution
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return []; // If endWord is not in wordList, return empty array.

  const result = [];
  const queue = [[beginWord]]; // BFS queue initialized with the beginWord
  const visited = new Set(); // To keep track of visited words
  let found = false;

  while (queue.length > 0) {
    const levelVisited = new Set(); // To track words visited in the current level
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const path = queue.shift();
      const lastWord = path[path.length - 1];

      for (let neighbor of getNeighbors(lastWord, wordSet)) {
        if (visited.has(neighbor)) continue;

        const newPath = [...path, neighbor];
        if (neighbor === endWord) {
          found = true;
          result.push(newPath); // Add valid sequence to the result
        }

        queue.push(newPath);
        levelVisited.add(neighbor); // Mark neighbor as visited for this level
      }
    }

    // Add words visited in this level to the global visited set
    for (let word of levelVisited) visited.add(word);

    // If we found the shortest transformation sequence, stop BFS
    if (found) break;
  }

  return result;
};

// Helper function to find all valid neighbors of a word
function getNeighbors(word, wordSet) {
  const neighbors = [];
  const charArray = word.split("");

  for (let i = 0; i < charArray.length; i++) {
    const originalChar = charArray[i];

    for (let char of "abcdefghijklmnopqrstuvwxyz") {
      if (char === originalChar) continue;

      charArray[i] = char;
      const newWord = charArray.join("");
      if (wordSet.has(newWord)) neighbors.push(newWord);
    }

    charArray[i] = originalChar; // Restore the original character
  }

  return neighbors;
}

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// The solution
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList); // Convert wordList to a set for faster lookup
if (!wordSet.has(endWord)) return 0; // If endWord is not in wordList, return 0

const queue = [[beginWord, 1]]; // Queue for BFS, stores [currentWord, transformationSteps]

while (queue.length > 0) {
    const [currentWord, steps] = queue.shift();

    if (currentWord === endWord) return steps; // Found the endWord

    // Try all possible single-letter transformations
    for (let i = 0; i < currentWord.length; i++) {
        for (let charCode = 97; charCode <= 122; charCode++) { // 'a' to 'z'
            const newWord =
                currentWord.slice(0, i) +
                String.fromCharCode(charCode) +
                currentWord.slice(i + 1);

            if (wordSet.has(newWord)) {
                queue.push([newWord, steps + 1]);
                wordSet.delete(newWord); // Remove from set to avoid revisiting
            }
        }
    }
}

return 0; // No transformation sequence found
};
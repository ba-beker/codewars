// /**
//  * @param {string[]} words
//  * @param {number} maxWidth
//  * @return {string[]}
//  */
// var fullJustify = function(words, maxWidth) {
//     let result = [];
// let line = [];
// let lineLength = 0;

// for (let word of words) {
//     // Check if adding the next word exceeds maxWidth
//     if (lineLength + word.length + line.length > maxWidth) {
//         // Distribute spaces
//         for (let i = 0; i < maxWidth - lineLength; i++) {
//             line[i % (line.length - 1 || 1)] += ' ';
//         }
//         result.push(line.join(''));
//         line = [];
//         lineLength = 0;
//     }
//     line.push(word);
//     lineLength += word.length;
// }

// // Handle the last line
// result.push(line.join(' ') + ' '.repeat(maxWidth - lineLength - (line.length - 1)));

// return result;
// };

// The solution
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let result = [];
  let line = [];
  let lineLength = 0;

  for (let word of words) {
    // Check if adding the next word exceeds maxWidth
    if (lineLength + word.length + line.length > maxWidth) {
      // Distribute spaces
      for (let i = 0; i < maxWidth - lineLength; i++) {
        line[i % (line.length - 1 || 1)] += " ";
      }
      result.push(line.join(""));
      line = [];
      lineLength = 0;
    }
    line.push(word);
    lineLength += word.length;
  }

  // Handle the last line
  result.push(
    line.join(" ") + " ".repeat(maxWidth - lineLength - (line.length - 1))
  );

  return result;
};

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// The solution
function duplicateEncode(word){
    word = word.toLowerCase(); // Convert the word to lowercase
let result = "";

for (let i = 0; i < word.length; i++) {
  if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
    result += "("; // Character appears only once
  } else {
    result += ")"; // Character appears more than once
  }
}

return result;
}

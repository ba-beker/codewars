// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// The solution
function shortcut (string) {
    // Define a regular expression to match lowercase vowels (a, e, i, o, u)
    var regex = /[aeiou]/g;
  
    // Use the `replace` method to remove lowercase vowels from the string
    var result = string.replace(regex, '');
  
    // Return the modified string
    return result;
}
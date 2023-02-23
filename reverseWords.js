
/* Description
	Complete the function that accepts a string parameter,
	and reverses each word in the string.
	All spaces in the string should be retained */

	
function reverseWords(str) {
	// Split the string into an array of words
   const words = str.split(' ');
   
   // Reverse each word in the array
   const reversedWords = words.map(word => {
	 return word.split('').reverse().join('');
   });
   
   // Join the reversed words back into a string with spaces between them
   return reversedWords.join(' ');
 }
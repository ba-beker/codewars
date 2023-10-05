// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// The solution
function rot13(message){
    return message.replace(/[a-zA-Z]/g, function(char) {
      var offset = char <= 'Z' ? 65 : 97;
      return String.fromCharCode((char.charCodeAt(0) - offset + 13) % 26 + offset);
    });
}
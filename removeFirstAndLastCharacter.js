function removeChar(str){
    // Check if the input string has at least two characters
    if (str.length >= 2) {
        return str.slice(1, -1);
    } else {
        // If the input string has less than two characters, return the original string as-is
        return str;
    }
};
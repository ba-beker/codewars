// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// The solution
function switchItUp(number){
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

    if (number >= 0 && number <= 9) {
        return words[number];
    } else {
        return "Number out of range";
    }
}
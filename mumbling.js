// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// The solution
function accum(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
    result += str[i].toLowerCase().repeat(i);
    if (i < str.length - 1) {
      result += "-";
    }
  }

  return result;
}

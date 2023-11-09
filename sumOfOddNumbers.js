// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// The solution
function rowSumOddNumbers(n) {
  // Calculate the first number in the row
  const firstNumber = 2 * (n - 1);

  // Calculate the sum of n consecutive odd numbers
  const sum = n * n * n;

  return sum;
}

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// The Solution
function towerBuilder(n) {
    const tower = [];
   const maxWidth = 2 * n - 1;
   
   for (let i = 0; i < n; i++) {
     const spaces = ' '.repeat((maxWidth - (2 * i + 1)) / 2);
     const stars = '*'.repeat(2 * i + 1);
     const floor = spaces + stars + spaces;
     tower.push(floor);
   }
   
   return tower;
 }

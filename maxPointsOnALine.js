// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// Example 1:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3
// Example 2:

// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4

// Constraints:

// 1 <= points.length <= 300
// points[i].length == 2
// -104 <= xi, yi <= 104
// All the points are unique.

// The Solution
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length <= 1) return points.length;

  let maxCount = 1;

  for (let i = 0; i < points.length; i++) {
    let slopeMap = new Map();
    let duplicate = 0;
    let localMax = 0;

    for (let j = i + 1; j < points.length; j++) {
      let dx = points[j][0] - points[i][0];
      let dy = points[j][1] - points[i][1];

      if (dx === 0 && dy === 0) {
        duplicate++; // Duplicate point
        continue;
      }

      let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      let divisor = gcd(dx, dy);

      dx /= divisor;
      dy /= divisor;

      let slopeKey = `${dx}/${dy}`;
      slopeMap.set(slopeKey, (slopeMap.get(slopeKey) || 0) + 1);
      localMax = Math.max(localMax, slopeMap.get(slopeKey));
    }

    maxCount = Math.max(maxCount, localMax + duplicate + 1);
  }

  return maxCount;
};

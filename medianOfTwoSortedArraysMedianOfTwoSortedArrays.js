// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// The solution
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the shorter array
  }

  const m = nums1.length;
  const n = nums2.length;

  let low = 0;
  let high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minX =
      partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

    const maxY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minY =
      partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      // Found the correct partition
      if ((m + n) % 2 === 0) {
        // Even number of elements
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        // Odd number of elements
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      // Move left in nums1
      high = partitionX - 1;
    } else {
      // Move right in nums1
      low = partitionX + 1;
    }
  }

  // We should never reach this point if the input arrays are sorted correctly
  throw new Error("Input arrays are not sorted!");
};

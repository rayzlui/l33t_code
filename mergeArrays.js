//From 88 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    nums1.pop();
    nums1.unshift(nums2[i]);
  }
  nums1.sort((x, y) => x - y);
  return nums1;
}

//From 1537 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxSum(nums1, nums2) {
  let i = 0;
  let j = 0;
  let sum1 = 0;
  let sum2 = 0;
  while (i < nums1.length || j < nums2.length) {
    if (j < nums2.length && (i === nums1.length || nums1[i] > nums2[j])) {
      sum2 += nums2[j];
      j++;
    } else if (
      i < nums1.length &&
      (j === nums2.length || nums1[i] < nums2[j])
    ) {
      sum1 += nums1[i];
      i++;
    } else {
      sum1 = Math.max(sum1, sum2) + nums1[i];
      sum2 = sum1;
      i++;
      j++;
    }
  }
  return Math.max(sum1, sum2) % (10 ** 9 + 7);
}

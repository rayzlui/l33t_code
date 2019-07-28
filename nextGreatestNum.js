//From 496 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function nextGreaterElement(nums1, nums2) {
  let results = new Array(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    for (let j = index; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        results[i] = nums2[j];
        break;
      }
    }
    if (results[i] === undefined) {
      results[i] = -1;
    }
  }
  return results;
}


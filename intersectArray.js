//From 350 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  let smaller = nums1.length > nums2.length ? nums2 : nums1;
  let larger = nums1.length > nums2.length ? nums1 : nums2;
  let result = [];
  let objectify = larger.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  for (let i = 0; i < smaller.length; i++) {
    if (objectify[smaller[i]] > 0) {
      result.push(smaller[i]);
      objectify[smaller[i]]--;
    }
  }
  return result;
}

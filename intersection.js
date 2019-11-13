//From 349 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  let set1 = Array.from(new Set(nums1));
  let set2 = Array.from(new Set(nums2));
  return set1.reduce((acc, curr) => {
    if (set2.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

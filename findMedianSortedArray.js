//From 4 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let total = nums1.length + nums2.length;
  let size =
    total % 2 === 0 ? Math.ceil(total / 2) + 1 : Math.floor(total / 2) + 1;
  let holder = [];
  while (holder.length !== size) {
    if (nums1.length === 0) {
      let num = nums2.shift();
      holder.push(num);
    } else if (nums2.length === 0) {
      let num = nums1.shift();
      holder.push(num);
    } else {
      if (nums1[0] > nums2[0]) {
        let num = nums2.shift();
        holder.push(num);
      } else {
        let num = nums1.shift();
        holder.push(num);
      }
    }
  }
  return total % 2 === 0
    ? (holder[holder.length - 2] + holder[holder.length - 1]) / 2
    : holder[holder.length - 1];
}

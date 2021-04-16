//From 1818 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function BST(val, array) {
  let left = 0;
  let right = array.length - 1;

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    let current = array[mid];
    if (current === val) {
      return val;
    }
    if (val > current) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return Math.abs(array[left] - val) > Math.abs(array[right] - val)
    ? array[right]
    : array[left];
}
function minAbsoluteSumDiff(nums1, nums2) {
  const MOD = BigInt(10 ** 9 + 7);
  let sum = BigInt(0);
  let copy1 = nums1.slice().sort((a, b) => a - b);

  let highest = 0;
  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    let direct = nums1[i];
    let diffDirect = Math.abs(current - direct);
    sum += BigInt(diffDirect);
    let closestVal = BST(current, copy1);
    let diffClosest = Math.abs(current - closestVal);

    let greatestDiff = diffDirect - diffClosest;
    highest = Math.max(highest, greatestDiff);
  }
  return (sum - BigInt(highest)) % MOD;
}

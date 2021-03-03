//From 1775 in LeetCode

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minOperations(nums1, nums2) {
  let [shorter, longer] =
    nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];
  let sum1 = shorter.reduce((acc, curr) => acc + curr);
  let sum2 = longer.reduce((acc, curr) => acc + curr);
  if (sum1 === sum2) {
    return 0;
  }
  if (shorter.length > longer.length * 6) {
    return -1;
  }
  if (longer.length > shorter.length * 6) {
    return -1;
  }
  shorter.sort((x, y) => {
    return x - y;
  });
  longer.sort((x, y) => {
    return x - y;
  });
  let difference = sum1 - sum2;
  //sum1 is shorter, sum2 is longer
  let result = 0;

  if (difference > 0) {
    //if shorter sum is greater than larger sum, we are adding to longer, so we start from front because its lower
    while (difference > 0) {
      let backShort = shorter[shorter.length - 1];
      let frontLong = longer[0];
      let changeLong = 6 - frontLong;
      let changeShort = backShort - 1;
      if (changeLong >= changeShort) {
        difference -= changeLong;
        longer.shift();
      } else {
        difference -= changeShort;
        shorter.pop();
      }
      result++;
    }
  } else {
    //if shorter sum is less than larger sum, we are subtracting from longer, so we start from large nums and make 1
    //difference is negative

    while (difference < 0) {
      let backLong = longer[longer.length - 1];
      let frontShort = shorter[0];
      let changeLong = backLong - 1;
      let changeShort = 6 - frontShort;
      if (changeLong >= changeShort) {
        difference += changeLong;
        longer.pop();
      } else {
        difference += changeShort;
        shorter.shift();
      }
      result++;
    }
  }
  return result;
}

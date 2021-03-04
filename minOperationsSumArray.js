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

//super fast
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minOperationsII(nums1, nums2) {
  let [shorter, longer] =
    nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];
  let sum1 = 0;
  let stored1 = {};
  let reduceLarge = longer.reduce(
    (acc, curr, index) => {
      let shortVal = shorter[index];
      if (shortVal) {
        sum1 += shortVal;
        stored1[shortVal] = stored1[shortVal] + 1 || 1;
      }
      acc[0] = acc[0] + curr;
      acc[1][curr] = acc[1][curr] + 1 || 1;
      return acc;
    },
    [0, {}],
  );
  let sum2 = reduceLarge[0];
  let stored2 = reduceLarge[1];
  if (sum1 === sum2) {
    return 0;
  }
  if (shorter.length > longer.length * 6) {
    return -1;
  }
  if (longer.length > shorter.length * 6) {
    return -1;
  }
  shorter = Object.keys(stored1);
  longer = Object.keys(stored2);
  //skip sorting by using built in sorting for javascript objects when keys are nums > 0. save us from O(nlogn) to 6 because there's at most 6 keys [1-6]
  let difference = sum1 - sum2;
  //sum1 is shorter, sum2 is longer
  let result = 0;

  if (difference > 0) {
    //if shorter sum is greater than larger sum, we are adding to longer, so we start from front because its lower
    while (difference > 0) {
      let backShort = shorter[shorter.length - 1] / 1;
      let frontLong = longer[0] / 1;
      let changeLong = 6 - frontLong;
      let changeShort = backShort - 1;
      if (changeLong >= changeShort) {
        difference -= changeLong;
        stored2[frontLong]--;
        if (stored2[frontLong] === 0) {
          longer.shift();
        }
      } else {
        difference -= changeShort;
        stored1[backShort]--;
        if (stored1[backShort] === 0) {
          shorter.pop();
        }
      }
      result++;
    }
  } else {
    //if shorter sum is less than larger sum, we are subtracting from longer, so we start from large nums and make 1
    //difference is negative

    while (difference < 0) {
      let backLong = longer[longer.length - 1] / 1;
      let frontShort = shorter[0] / 1;
      let changeLong = backLong - 1;
      let changeShort = 6 - frontShort;
      if (changeLong >= changeShort) {
        difference += changeLong;
        stored2[backLong]--;
        if (stored2[backLong] === 0) {
          longer.pop();
        }
      } else {
        difference += changeShort;
        stored1[frontShort]--;
        if (stored1[frontShort] === 0) {
          shorter.shift();
        }
      }
      result++;
    }
  }
  return result;
}

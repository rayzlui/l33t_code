//From 532 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findPairs(nums, k) {
  let noDups = nums.reduce((arr, curr) => {
    if (arr[curr]) {
      arr[curr]++;
    } else {
      arr[curr] = 1;
    }
    return arr;
  }, {});
  let pairs = 0;
  if (k === 0) {
    for (let a in noDups) {
      if (noDups[a] >= 2) {
        pairs++;
      }
    }
    return pairs;
  }
  noDups = Object.keys(noDups);
  noDups = noDups.sort((x, y) => x - y);

  for (let i = 0; i < noDups.length; i++) {
    for (let j = i + 1; j < noDups.length; j++) {
      let diff = noDups[j] - noDups[i];
      if (diff === k) {
        pairs++;
      }
      if (diff > k) {
        break;
      }
    }
  }
  return pairs;
}

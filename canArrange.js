//From 1497 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
function canArrange(arr, k) {
  let sum = arr.reduce((acc, curr) => acc + curr);
  return sum % k === 0 && sum !== k;
}

//correct

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
function canArrangeII(arr, k) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let remainder = arr[i] % k;
    if (remainder < 0) {
      remainder = k + remainder;
    }
    if (seen[remainder]) {
      seen[remainder]++;
    } else {
      seen[remainder] = 1;
    }
  }
  if (seen[0] % 2 === 1) {
    return false;
  }
  delete seen[0];
  let keys = Object.keys(seen);

  for (let i = 0; i < keys.length; i++) {
    let x = keys[i] / 1;
    let remainder = k - x;

    if (seen[remainder] !== seen[x]) {
      return false;
    }
  }
  return true;
}

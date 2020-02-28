//From 1346 in LeetCode

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist(arr) {
  if (arr.filter(x => x === 0).length === 2) {
    return true;
  }
  let evens = arr.filter(x => x % 2 === 0 && x !== 0);
  return evens.some(x => arr.includes(x / 2));
}

//faster

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExistII(arr) {
  let zero = 0;
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
      if (zero === 2) {
        return true;
      }
    }
    let double = arr[i] * 2;
    let half = arr[i] / 2;
    if (seen[double] || seen[half]) {
      return true;
    }
    seen[arr[i]] = true;
  }
  return false;
}

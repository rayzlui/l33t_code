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


//From 1640 in LeetCode

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
function canFormArray(arr, pieces) {
  for (let i = 0; i < pieces.length; i++) {
    let current = pieces[i];
    let index = arr.findIndex(x => x === current[0]);
    if (index === -1) {
      return false;
    }
    index++;
    let nextArr = arr[index];
    for (let j = 1; j < current.length; j++) {
      if (current[j] !== nextArr) {
        return false;
      } else {
        index++;
        nextArr = arr[index];
      }
    }
  }
  return true;
}

//From 763 in LeetCode

/**
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels(S) {
  let arr = S.split('');
  let reverse = arr.slice().reverse();
  let result = [];
  let first = 0;
  let last = arr.length - reverse.indexOf(arr[0]) - 1;
  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];
    let newLast = arr.length - reverse.indexOf(letter) - 1;
    if (newLast > last) {
      last = newLast;
    }
    if (i === last) {
      let length = last - first + 1;
      result.push(length);
      first = i + 1;
    }
  }
  return result;
}

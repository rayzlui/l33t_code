//From 658 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
  if (x < arr[0]) {
    return arr.slice(0, k);
  }
  if (x > arr[arr.length - 1]) {
    return arr.slice(arr.length - k - 1, k);
  }
  if (arr.length === 1) {
    return arr;
  }
  let index = arr.findIndex(y => y >= x);
  if (k === 1) {
    if (arr[index] === x) {
      return [arr[index]];
    }
    let diff1 = arr[index] - x;
    let diff2 = x - arr[index - 1];
    let choice = diff1 < diff2 ? index : index - 1;
    return arr.slice(choice, choice + 1);
  }
  let a = index;
  let b = index + 1;
  if (arr[index] > x) {
    a--;
    b--;
  }
  while (b - a <= k) {
    let diffA = Math.abs(arr[a] - x);
    let diffB = Math.abs(arr[b] - x);
    if (diffA > diffB) {
      b++;
    } else {
      a--;
    }
    if (a < 0) {
      return arr.splice(0, k);
    }
  }
  let section = arr.slice(a, b);
  Math.abs(section[0] - x) >= Math.abs(section[section.length - 1] - x)
    ? section.shift()
    : section.pop();
  return section;
}

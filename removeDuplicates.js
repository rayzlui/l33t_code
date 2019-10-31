//From 1209 in LeetCode

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(s, k) {
  let array = s.split('');
  for (let i = 0; i <= array.length - k; i++) {
    let check = array.slice(i, k + i);
    if (check.every(x => x === check[0])) {
      array.splice(i, k);
      i = i - k >= 0 ? i - k : -1;
    }
  }
  return array.join('');
}

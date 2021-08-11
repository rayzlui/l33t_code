//From 1963 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function minSwaps(s) {
  let left = 0;
  let right = s.length - 1;
  let balance = 0;
  let swaps = 0;
  while (left < right) {
    let current = s[left];
    if (current === '[') {
      balance++;
    } else {
      if (balance < 1) {
        while (s[right] !== '[') {
          right--;
        }
        balance++;
        right--;
        swaps++;
      } else {
        balance--;
      }
    }
    left++;
  }
  return swaps;
}

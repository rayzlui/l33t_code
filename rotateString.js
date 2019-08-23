//From 796 in Leetcode

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString(B, A) {
  if (B === A) {
    return true;
  }
  for (let i = B.length - 1; i >= 0; i--) {
    let back = A.substring(i);
    let front = A.substring(0, i);
    if (back + front === B) {
      return true;
    }
  }
  return false;
}

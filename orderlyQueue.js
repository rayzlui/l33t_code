//From 899 in LeetCode

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
function orderlyQueue(S, K) {
  if (K === 1) {
    let string = S;
    for (let i = 1; i < S.length; i++) {
      let front = S.substring(i);
      let back = S.substring(0, i);
      if (front + back < string) {
        string = front + back;
      }
    }
    return string;
  } else {
    let sorted = S.split('').sort();
    return sorted.join('');
  }
}

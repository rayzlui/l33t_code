//From 738 in LeetCode

/**
 * @param {number} N
 * @return {number}
 */
function monotoneIncreasingDigits(N) {
  N = N.toString();
  let result = '';
  let last = 0;
  let even = false;
  for (let i = 0; i < N.length - 1; i++) {
    let front = N[i];
    let back = N[i + 1];
    if (front / 1 === back / 1) {
      if (!even) {
        last = i;
      }
      even = true;
    }
    if (front / 1 < back / 1) {
      result += front;

      if (even) {
        for (let j = last; j < i; j++) {
          result += N[last];
        }
      }
      even = false;
      if (i === N.length - 2) {
        result += back;
      }
      last = i + 1;
    }
    if (front / 1 > back / 1) {
      let diff = N.length - last;
      let first = front / 1 - 1;
      if (first) {
        result += first;
      }
      for (let j = 0; j < diff - 1; j++) {
        result += '9';
      }
      break;
    }
  }
  return result / 1;
}

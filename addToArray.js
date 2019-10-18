//From 989 in LeetCode

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
function addToArrayForm(A, K) {
  let kSize = K.toString().length;
  if (kSize >= A.length) {
    return (A.join('').toString() / 1 + K).toString().split('');
  }
  let sum = (A.splice(A.length - kSize).join('') / 1 + K).toString().split('');
  if (sum.length > kSize) {
    let carry = sum.splice(0, 1)[0] / 1;
    let i = A.length - 1;
    for (; i >= 0; i--) {
      A[i] = A[i] + carry;
      if (A[i] > 9) {
        A[i] = A[i] % 10;
        carry = 1;
      } else {
        break;
      }
      if (i === 0) {
        A.unshift(1);
      }
    }
  }

  return A.concat(sum);
}

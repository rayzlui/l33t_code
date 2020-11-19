//From 1652 in LeetCode

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
function decrypt(code, k) {
  let codeLength = code.length;
  if (k === 0) {
    return new Array(codeLength).fill(0);
  }
  let wrap = code.slice();
  let wrap1 = code.slice();
  wrap = wrap.concat(wrap1);
  let sum = 0;
  if (k > 0) {
    let start = 1;
    let i = 1;

    for (; i <= k; i++) {
      sum += wrap[i];
    }
    for (let j = 0; j < code.length; j++) {
      code[j] = sum;
      sum -= wrap[start];
      sum += wrap[i];
      start++;
      i++;
    }
    return code;
  } else {
    let i = 1;
    let start = 1;
    k = k * -1;
    for (; i <= k; i++) {
      sum += wrap[codeLength - i];
    }
    for (let j = 0; j < code.length; j++) {
      code[j] = sum;
      sum -= wrap[codeLength + j - k];
      sum += wrap[codeLength + j];
    }
    return code;
  }
}

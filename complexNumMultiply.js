//From 537 in LeetCode

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function complexNumberMultiply(a, b) {
  let numsA = a.split('+');
  let numsB = b.split('+');
  let realA = numsA[0] / 1;
  let realB = numsB[0] / 1;
  let imaginaryA = numsA[1].substring(0, numsA[1].length - 1) / 1;
  let imaginaryB = numsB[1].substring(0, numsB[1].length - 1) / 1;
  return (
    realA * realB -
    imaginaryA * imaginaryB +
    '+' +
    (imaginaryA * realB + imaginaryB * realA) +
    'i'
  );
}

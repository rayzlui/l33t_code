//From 848 in LeetCode

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .reduce((acc, curr, index) => {
    acc[curr] = index;
    acc[index] = curr;
    return acc;
  }, {});
function shiftingLetters(S, shifts) {
  shifts = shifts
    .reverse()
    .reduce(
      (acc, curr) => {
        acc.push(acc[acc.length - 1] + curr);
        return acc;
      },
      [0],
    )
    .reverse();
  shifts.pop();
  let result = '';
  for (let i = 0; i < S.length; i++) {
    let current = S[i];
    let value = alphabet[current];
    let newVal = (value + shifts[i]) % 26;
    result += alphabet[newVal];
  }
  return result;
}

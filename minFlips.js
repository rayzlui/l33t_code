//From 1318 from LeetCode

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function minFlips(a, b, c) {
  let bitA = a
    .toString(2)
    .split('')
    .reverse();
  let bitB = b
    .toString(2)
    .split('')
    .reverse();
  let bitC = c
    .toString(2)
    .split('')
    .reverse();
  let longest = Math.max(bitA.length, bitB.length, bitC.length);
  let count = 0;

  for (let i = 0; i < longest; i++) {
    let valC = bitC[i] === undefined ? 0 : bitC[i] / 1;
    let valA = bitA[i] === undefined ? 0 : bitA[i] / 1;
    let valB = bitB[i] === undefined ? 0 : bitB[i] / 1;
    if (valC === 0) {
      if (valA === 1) {
        count++;
      }
      if (valB === 1) {
        count++;
      }
    } else {
      if (valA === 0 && valB === 0) {
        count++;
      }
    }
  }
  return count;
}

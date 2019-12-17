//From 1291 in LeetCode

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sequentialDigits(low, high) {
  let result = [];
  let length = high.toString().length;
  let highest = new Array(length).fill(0);
  highest.unshift(1);
  let higher = highest.join('') / 1;
  for (let i = low; i <= higher; i = i * 10) {
    let length = i.toString().length;
    for (let j = 0; j <= 9 - length; j++) {
      let val = sequence.slice(j, j + length).join('') / 1;
      if (val <= high && val >= low) {
        result.push(val);
      }
    }
  }
  return result.sort((x, y) => x - y);
}

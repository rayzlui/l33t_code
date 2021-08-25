//From 1974 in LeetCode

/**
 * @param {string} word
 * @return {number}
 */
function minTimeToType(word) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((acc, curr, index) => {
      acc[curr] = index;
      return acc;
    }, {});
  let result = 0;
  let previous = 0;
  for (let i = 0; i < word.length; i++) {
    let current = word[i];
    let value = alphabet[current];
    let larger = Math.max(previous, value);
    let smaller = Math.min(previous, value);
    let oneWay = larger - smaller;
    let otherWay = 26 - larger + smaller;
    result += Math.min(oneWay, otherWay) + 1;
    previous = value;
  }
  return result;
}

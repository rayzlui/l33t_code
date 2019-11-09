//From 1189 in LeetCode

/**
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
  let holder = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let i = 0; i < text.length; i++) {
    holder[text[i]]++;
  }
  return Math.min(
    holder['b'],
    holder['a'],
    Math.floor(holder['l'] / 2),
    Math.floor(holder['o'] / 2),
    holder['n'],
  );
}

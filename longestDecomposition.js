//From 1147 in LeetCode

/**
 * @param {string} text
 * @return {number}
 */
function longestDecomposition(text) {
  let reverse = text.split('').reverse();
  let count = 0;
  let frontString = '';
  let backString = '';

  for (let i = 0; i < text.length / 2; i++) {
    let frontLetter = text[i];
    let backLetter = reverse[i];
    frontString += frontLetter;
    backString = backLetter + backString;
    if (frontString === backString) {
      if (i === Math.floor(text.length / 2)) {
        return count + 1;
      }
      frontString = '';
      backString = '';
      count += 2;
    }
  }
  if (frontString.length > 0) {
    count++;
  }
  return count;
}
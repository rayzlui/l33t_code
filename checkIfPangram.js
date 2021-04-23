//From 1832 in LeetCode

/**
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangram(sentence) {
  return (
    sentence.split('').reduce((acc, curr) => {
      acc.add(curr);
      return acc;
    }, new Set()).size === 26
  );
}

//faster

/**
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangramII(sentence) {
  let letters = new Set();
  for (let i = 0; i < sentence.length; i++) {
    letters.add(sentence[i]);
  }
  return letters.size === 26;
}

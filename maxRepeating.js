//From 1668 in LeetCode

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
function maxRepeating(sequence, word) {
  let max = 0;
  let count = 0;
  let wordLength = word.length;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === word[0]) {
      let sub = sequence.substr(i, wordLength);
      if (sub === word) {
        count++;
        i = i + wordLength - 1;
        max = Math.max(count, max);
      } else {
        count = 0;
      }
    } else {
      count = 0;
    }
  }
  return max;
}

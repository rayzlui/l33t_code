//From 1684 in LeetCode

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
  let dict = {};
  for (let i = 0; i < allowed.length; i++) {
    let current = allowed[i];
    dict[current] = true;
  }
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    for (let j = 0; j < current.length; j++) {
      if (dict[current[j]] === undefined) {
        count--;
        break;
      }
    }
    count++;
  }
  return count;
}

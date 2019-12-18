//From 820 in LeetCode

/**
 * @param {string[]} words
 * @return {number}
 */
function minimumLengthEncoding(words) {
  words = Array.from(new Set(words));
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    for (let j = 1; j < current.length; j++) {
      let remove = current.slice(j);
      words = words.filter(x => x !== remove);
    }
  }
  return words.length + words.join('').length;
}

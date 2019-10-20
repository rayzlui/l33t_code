//From 290 in LeetCode

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
function wordPattern(pattern, str) {
  let holder = {};
  let dict = {};
  let words = str.split(' ');
  if (words.length !== pattern.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    let element = pattern[i];
    let word = words[i];
    if (holder[element] !== undefined) {
      if (holder[element] !== word) {
        return false;
      }
    } else {
      if (dict[word] !== undefined) {
        if (dict[word] !== element) {
          return false;
        }
      }
      holder[element] = word;
      dict[word] = element;
    }
  }
  return true;
}

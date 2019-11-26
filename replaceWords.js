//From 648 in LeetCode

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
function replaceWords(dict, sentence) {
  let words = sentence.split(' ');
  let object = dict.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    let section = '';
    for (let j = 0; j < current.length; j++) {
      section += current[j];
      if (object[section]) {
        words[i] = section;
        break;
      }
    }
  }
  return words.join(' ');
}

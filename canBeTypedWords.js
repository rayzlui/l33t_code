//From 1935 in LeetCode

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
function canBeTypedWords(text, brokenLetters) {
  let holder = {};
  let wordNum = 1;
  for (let i = 0; i < text.length; i++) {
    let current = text[i];
    if (text[i] === ' ') {
      wordNum++;
    } else {
      if (!holder[current]) {
        holder[current] = new Set();
      }
      holder[current].add(wordNum);
    }
  }
  let invalidWords = new Set();
  for (let i = 0; i < brokenLetters.length; i++) {
    let invalidLetter = brokenLetters[i];
    if (holder[invalidLetter]) {
      holder[invalidLetter].forEach(x => invalidWords.add(x));
    }
  }
  return wordNum - invalidWords.size;
}

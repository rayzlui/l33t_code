//From 966 in LeetCode

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
const vowels = 'aeiouAEIOU'.split('').reduce((acc, curr) => {
  acc[curr] = true;
  return acc;
}, {});

function spellchecker(wordlist, queries) {
  let words = {};
  let lowerWords = {};
  let wordCheck = wordlist.reduce((acc, curr) => {
    let word = curr.toLowerCase();
    let blankedVowels = '';
    for (let i = 0; i < word.length; i++) {
      if (vowels[word[i]]) {
        blankedVowels += ' ';
      } else {
        blankedVowels += word[i];
      }
    }
    if (acc[blankedVowels]) {
      acc[blankedVowels].push(curr);
    } else {
      acc[blankedVowels] = [curr];
    }
    words[curr] = true;
    if (lowerWords[word.toLowerCase()]) {
      lowerWords[word.toLowerCase()].push(curr);
    } else {
      lowerWords[word.toLowerCase()] = [curr];
    }
    return acc;
  }, {});
  return queries.map(word => {
    if (words[word]) {
      return word;
    } else if (lowerWords[word.toLowerCase()]) {
      return lowerWords[word.toLowerCase()][0];
    } else {
      let blankedVowels = '';
      word = word.toLowerCase();
      for (let i = 0; i < word.length; i++) {
        if (vowels[word[i]]) {
          blankedVowels += ' ';
        } else {
          blankedVowels += word[i];
        }
      }
      if (wordCheck[blankedVowels]) {
        return wordCheck[blankedVowels][0];
      } else {
        return '';
      }
    }
  });
}

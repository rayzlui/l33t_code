//From 30 in LeetCode

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  if (s.length === 0) {
    return [];
  }
  if (words.length === 0) {
    return [];
  }

  let wordLength = words[0].length;
  let concatLength = words.length * wordLength;
  let possibleIndices = {};
  let count = words.reduce((acc, curr) => {
    let num;
    let copyS = s;
    let index = 0;
    while (num !== -1) {
      num = copyS.search(curr);
      if (num !== -1) {
        possibleIndices[num + index] = true;
        if (
          curr ===
          curr
            .split('')
            .reverse()
            .join('')
        ) {
          possibleIndices[num + index + 1] = true;
        }
      }
      copyS = copyS.substr(num + 1);

      index += num + 1;
    }
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  possibleIndices = Object.keys(possibleIndices);
  let result = [];
  for (let i = 0; i < possibleIndices.length; i++) {
    let start = s.substr(possibleIndices[i], concatLength);
    let library = {};
    for (let j = 0; j < start.length; j += wordLength) {
      let subsub = start.substr(j, wordLength);
      if (library[subsub]) {
        library[subsub]++;
      } else {
        library[subsub] = 1;
      }
    }
    if (words.every(x => library[x] === count[x])) {
      result.push(possibleIndices[i]);
    }
  }
  return result;
}

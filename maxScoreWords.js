//From 1255 from LeetCode

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
function maxScoreWords(words, letters, score) {
  let values = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((acc, curr, index) => {
      acc[curr] = score[index];
      return acc;
    }, {});
  let letterCount = letters.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let wordGroups = [];

  let wordCost = {};
  function createGroups(word, group, letters, remainder) {
    if (remainder.length === 0) {
      return;
    }
    for (let i = 0; i < remainder.length; i++) {
      let curr = remainder[i];
      if (curr !== word) {
        let cost = wordCost[curr];
        let keys = Object.keys(cost);
        let copy = Object.assign({}, letters);
        if (keys.every(x => copy[x] - cost[x] >= 0)) {
          keys.forEach(y => (copy[y] = copy[y] - cost[y]));
          let groupCopy = group.slice();
          groupCopy.push(curr);
          wordGroups.push(groupCopy);
          createGroups(word, groupCopy, copy, remainder.slice(i + 1));
        }
      }
    }
  }
  let vals = words.reduce((wordVals, word) => {
    wordGroups.push([word]);
    let count = word.split('').reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
    wordCost[word] = count;
    let value = 0;
    let letters = Object.keys(count);
    for (let i = 0; i < letters.length; i++) {
      let string = count[letters[i]];
      let stock = letterCount[letters[i]];

      if (stock < string || stock === undefined) {
        wordVals[word] = 0;
        return wordVals;
      } else {
        value += count[letters[i]] * values[letters[i]];
      }
    }
    wordVals[word] = value;
    return wordVals;
  }, {});
  words.forEach((x, index) => {
    if (vals[x] > 0) {
      let cost = wordCost[x];
      let keys = Object.keys(cost);
      let copy = Object.assign({}, letterCount);
      keys.forEach(y => (copy[y] = copy[y] - cost[y]));
      createGroups(x, [x], copy, words.slice(index + 1));
    }
  });
  if (wordGroups.length === 0) {
    return 0;
  }
  let max = wordGroups.map(x =>
    x.reduce((acc, curr) => {
      acc = vals[curr] + acc;
      return acc;
    }, 0),
  );
  return Math.max(...max);
}

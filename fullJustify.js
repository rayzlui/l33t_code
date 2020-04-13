//From 68 in LeetCode

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  let result = [];
  let currentWords = [];
  let currentCount = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let length = word.length;
    let string = '';

    if (currentCount + length > maxWidth) {
      if (currentWords.length === 1) {
        let word = currentWords[0];
        for (let p = word.length; p < maxWidth; p++) {
          word += ' ';
        }
        result.push(word);
      } else {
        let gaps = maxWidth - (currentCount - currentWords.length);
        let words = currentWords.length - 1;
        let space = gaps / words;
        if (space !== Math.floor(space)) {
          let atWord = 0;
          while (space !== Math.floor(space)) {
            string += currentWords[atWord];
            for (let k = 0; k < Math.floor(space) + 1; k++) {
              string = string + ' ';
            }
            gaps -= Math.floor(space) + 1;
            words--;
            space = gaps / words;
            atWord++;
          }
          for (let j = atWord; j < currentWords.length - 1; j++) {
            string += currentWords[j];
            for (let k = 0; k < space; k++) {
              string = string + ' ';
            }
          }
        } else {
          for (let k = 0; k < currentWords.length - 1; k++) {
            string += currentWords[k];
            for (let f = 0; f < space; f++) {
              string += ' ';
            }
          }
        }
        string += currentWords[currentWords.length - 1];
        result.push(string);
      }
      currentWords = [word];
      currentCount = length + 1;
    } else {
      currentWords.push(word);
      currentCount += length + 1;
    }
  }
  let lastLine = currentWords.join(' ');
  for (let i = lastLine.length; i < maxWidth; i++) {
    lastLine += ' ';
  }
  result.push(lastLine);
  return result;
}

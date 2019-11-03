//From 1023 in LeetCode

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */

function splitByCapital(string) {
  let patternArr = [];
  let capital = '';
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (current.toLowerCase() === current) {
      capital += current;
    } else {
      patternArr.push(capital);
      capital = current;
    }
  }
  patternArr.push(capital);
  patternArr.shift();
  return patternArr;
}
function camelMatch(queries, pattern) {
  let result = [];
  let patternSplit = splitByCapital(pattern);
  for (let j = 0; j < queries.length; j++) {
    let currentWord = queries[j];
    let splitWord = splitByCapital(currentWord);
    if (splitWord.length === patternSplit.length) {
      let isTrue = true;
      splitWord.forEach((word, index) => {
        let pat = patternSplit[index];
        let copy = word.slice();
        for (let k = 0; k < pat.length; k++) {
          let patLetter = pat[k];
          let index = copy.indexOf(patLetter);
          if (index === -1) {
            isTrue = false;
            break;
          } else {
            copy = copy.slice(index + 1);
          }
        }
      });
      if (isTrue) {
        result.push(true);
      } else {
        result.push(false);
      }
    } else {
      result.push(false);
    }
  }
  return result;
}

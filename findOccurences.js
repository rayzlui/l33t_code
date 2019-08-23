//From 1078 in LeetCode

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOcurrences(text, first, second) {
  let result = [];
  let textArr = text.split(' ');
  for (let i = 2; i < textArr.length; i++) {
    if (textArr[i - 2] === first && textArr[i - 1] === second) {
      result.push(textArr[i]);
    }
  }
  return result;
};

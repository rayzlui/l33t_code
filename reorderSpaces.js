//From 1592 in LeetCode

/**
 * @param {string} text
 * @return {string}
 */
function reorderSpaces(text) {
  let words = text.split(' ').filter(x => x.trim() !== '');
  if (words.length <= 1) {
    let diff = text.length - words[0].length;
    if (diff === 0) {
      return text;
    }
    let spaces = new Array(diff).fill(' ').join('');
    return words[0] + spaces;
  }
  let count = words.reduce((acc, curr) => (acc += curr.length), 0);
  let diff = text.length - count;
  let divide = Math.floor(diff / (words.length - 1));
  let remainder = diff % (words.length - 1);
  let space = '';
  let end = '';
  for (let i = 0; i < divide; i++) {
    space += ' ';
    if (i < remainder) {
      end += ' ';
    }
  }
  let string = words.reduce((acc, curr) => acc + space + curr) + end;
  return string;
}

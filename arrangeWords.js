//From 1451 in LeetCode

/**
 * @param {string} text
 * @return {string}
 */
function arrangeWords(text) {
  let arr = text.split(' ').reduce((acc, curr) => {
    let length = curr.length;
    if (acc[length]) {
      acc[length].push(curr.toLowerCase());
    } else {
      acc[length] = [curr.toLowerCase()];
    }
    return acc;
  }, {});
  let values = Object.values(arr);
  let string = values.reduce((acc, curr) => {
    curr.forEach(x => (acc += x + ' '));
    return acc;
  }, '');
  return (string[0].toUpperCase() + string.substring(1)).trim();
}

//From 1324 in LeetCode

/**
 * @param {string} s
 * @return {string[]}
 */
function printVertically(s) {
  let arr = s.split(' ');
  let maxLength = Math.max(...arr.map(x => x.length));
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    let current = 'i';
    for (let j = 0; j < arr.length; j++) {
      current += arr[j][i] ? arr[j][i] : ' ';
    }
    current = current.trim();
    current = current.slice(1);
    result.push(current);
  }
  return result;
}

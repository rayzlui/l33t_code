//From 6 in Leetcode

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  let increasing = true;
  let count = 1;
  let holder = [];
  for (let i = 0; i < s.length; i++) {
    if (holder[count]) {
      holder[count] += s[i];
    } else {
      holder[count] = s[i];
    }
    if (count === numRows) {
      increasing = false;
    }
    if (count === 1) {
      increasing = true;
    }
    if (increasing) {
      count++;
    } else {
      count--;
    }
  }
  return holder.join('');
}

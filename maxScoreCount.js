//From 1422 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function maxScore(s) {
  s = s.split('');
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    let front = s.slice(0, i);
    let back = s.slice(i);
    max = Math.max(
      front.filter(x => x === '0').length + back.filter(x => x === '1').length,
      max,
    );
  }
  return max;
}
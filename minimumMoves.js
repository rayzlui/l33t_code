//From 2027 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function minimumMoves(s) {
  let moves = 0;
  for (let i = 0; i < s.length; ) {
    let current = s[i];
    if (current === 'X') {
      moves++;
      i += 3;
    } else {
      i++;
    }
  }
  return moves;
}

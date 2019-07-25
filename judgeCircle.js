//From 657 in LeetCode

/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
  let vertical = 0;
  let horizontal = 0;
  for (x of moves) {
    switch (x) {
      case 'L':
        vertical--;
        break;
      case 'R':
        vertical++;
        break;
      case 'U':
        horizontal++;
        break;
      case 'D':
        horizontal--;
        break;
    }
  }
  return vertical === 0 && horizontal === 0;
};

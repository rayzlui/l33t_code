//From 789 in LeetCode

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
function escapeGhosts(ghosts, target) {
  for (let i = 0; i < ghosts.length; i++) {
    let ghost = ghosts[i];
    if (
      Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]) <=
      Math.abs(target[0]) + Math.abs(target[1])
    ) {
      return false;
    }
  }
  return true;
}

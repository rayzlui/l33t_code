//From 1366 in LeetCode

/**
 * @param {string[]} votes
 * @return {string}
 */
function rankTeams(votes) {
  let voteCount = {};
  for (let i = 0; i < votes.length; i++) {
    let current = votes[i];
    for (let j = 0; j < current.length; j++) {
      let letter = current[j];
      if (voteCount[letter]) {
        if (voteCount[letter][j]) {
          voteCount[letter][j]++;
        } else {
          voteCount[letter][j] = 1;
        }
      } else {
        voteCount[letter] = {};
        voteCount[letter][j] = 1;
      }
    }
  }
  let keys = Object.keys(voteCount).sort();
  return keys
    .sort((x, y) => {
      let keysX = Object.keys(voteCount[x]);
      let keysY = Object.keys(voteCount[y]);
      let i = 0;
      if (keysX[i] !== keysY[i]) {
        return keysX[i] - keysY[i];
      }
      while (keysY[i] === keysX[i]) {
        if (voteCount[x][keysX[i]] !== voteCount[y][keysY[i]]) {
          return voteCount[y][keysY[i]] - voteCount[x][keysX[i]];
        }
        if (i === keysX.length) {
          return 0;
        }
        i++;
      }
      return keysX[i] - keysY[i];
    })
    .join('');
}

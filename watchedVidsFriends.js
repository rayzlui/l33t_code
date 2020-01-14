//From 1311 in LeetCode

/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
function watchedVideosByFriends(watchedVideos, friends, id, level) {
  let currentLvl = 1;
  let friendsDepth = friends[id];
  while (currentLvl < level) {
    currentLvl++;
    let nextFriends = [];
    for (let i = 0; i < friendsDepth.length; i++) {
      if (friendsDepth[i] !== id) {
        nextFriends.push(...friends[friendsDepth[i]]);
      }
    }
    friendsDepth = Array.from(new Set(nextFriends));
    friendsDepth = friendsDepth.filter(x => !friends[x].includes(id));
  }
  let vidsFreq = friendsDepth.reduce((acc, curr) => {
    if (curr !== id) {
      watchedVideos[curr].forEach(x => {
        if (acc[x]) {
          acc[x]++;
        } else {
          acc[x] = 1;
        }
      });
    }
    return acc;
  }, {});
  let vids = Object.keys(vidsFreq).sort((x, y) => {
    if (vidsFreq[x] === vidsFreq[y]) {
      return x.localeCompare(y);
    } else {
      return vidsFreq[x] - vidsFreq[y];
    }
  });
  return vids;
}

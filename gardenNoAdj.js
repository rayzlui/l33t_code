//From 1042 in LeetCode

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
function gardenNoAdj(N, paths) {
  if (paths.length === 0) {
    return new Array(N).fill(1);
  }
  let connections = paths.reduce((acc, curr) => {
    let path1 = curr[0];
    let path2 = curr[1];
    if (acc[path1 - 1]) {
      acc[path1 - 1].push(path2 - 1);
    } else {
      acc[path1 - 1] = [path2 - 1];
    }
    if (acc[path2 - 1]) {
      acc[path2 - 1].push(path1 - 1);
    } else {
      acc[path2 - 1] = [path1 - 1];
    }
    return acc;
  }, {});
  let result = new Array(N);
  for (let j = 0; j < N; j++) {
    let pathsTo = connections[j] || [];
    let flowers = [1, 2, 3, 4];
    for (let i = 0; i < pathsTo.length; i++) {
      let used = result[pathsTo[i]];
      if (used) {
        flowers.splice(flowers.indexOf(used), 1);
      }
    }
    result[j] = flowers[0];
  }

  return result;
}

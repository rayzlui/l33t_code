//From 1496 in LeetCode

/**
 * @param {string} path
 * @return {boolean}
 */
function isPathCrossing(path) {
  let visited = {};
  let current = [0, 0];
  visited[current.join()] = true;
  for (let i = 0; i < path.length; i++) {
    let move = path[i];
    switch (move) {
      case 'N':
        current[0]++;
        break;
      case 'S':
        current[0]--;
        break;
      case 'E':
        current[1]--;
        break;
      default:
        current[1]++;
        break;
    }
    if (visited[current.join()]) {
      return true;
    } else {
      visited[current.join()] = true;
    }
  }
  return false;
}

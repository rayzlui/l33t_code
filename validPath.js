//From 1971 in LeetCode

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
function validPath(n, edges, start, end) {
  if (start === end) {
    return true;
  }
  let paths = edges.reduce((acc, curr) => {
    let x = curr[0];
    let y = curr[1];
    if (acc[x]) {
      acc[x].push(y);
    } else {
      acc[x] = [y];
    }
    if (acc[y]) {
      acc[y].push(x);
    } else {
      acc[y] = [x];
    }
    return acc;
  }, {});
  let traveled = {};
  let queue = [];
  let starts = paths[start];
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] === end) {
      return true;
    } else {
      queue.push(starts[i]);
    }
  }
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    let connects = paths[current];
    for (let j = 0; j < connects.length; j++) {
      let path = connects[j];
      if (path === end) {
        return true;
      } else {
        if (traveled[path] === undefined) {
          queue.push(path);
          traveled[path] = true;
        }
      }
    }
  }
  return false;
}

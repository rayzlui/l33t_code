//From 1584 in LeetCode

/**
 * @param {number[][]} points
 * @return {number}
 */
function minCostConnectPoints(points) {
  if (points.length <= 1) {
    return 0;
  }
  let result = 0;
  let queue = [0];
  let visited = [];
  while (queue.length < points.length) {
    let diffs = {};
    let i = 0;
    for (; i < queue.length; i++) {
      let currentPoint = points[queue[i]];
      if (visited[queue[i]]) {
        continue;
      } else {
        for (let j = 0; j < points.length; j++) {
          let compare = points[j];
          if (j !== queue[i] / 1 && !visited[j]) {
            diffs[j] =
              Math.abs(currentPoint[0] - compare[0]) +
              Math.abs(currentPoint[1] - compare[1]);
          }
        }
        visited[queue[i]] = diffs;
      }
    }
    let needConnect = Object.keys(diffs);
    let lowestValue = Infinity;
    let lowestIndex = needConnect.reduce((acc, curr) => {
      visited.forEach((x, index) => {
        if (x[curr] < lowestValue && index !== curr) {
          acc = curr;
          lowestValue = x[curr];
        }
      });
      return acc;
    }, null);
    queue.push(lowestIndex);
    result += lowestValue;
  }
  return result;
}

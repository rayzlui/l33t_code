//From 1560 in LeetCode

/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
function mostVisited(n, rounds) {
  let visited = {};
  let start = rounds[0];
  visited[start] = 1;
  for (let i = 1; i < rounds.length; i++) {
    let current = rounds[i];
    if (start > current) {
      for (let j = start + 1; j <= n; j++) {
        if (visited[j]) {
          visited[j]++;
        } else {
          visited[j] = 1;
        }
      }
      for (let j = 1; j <= current; j++) {
        if (visited[j]) {
          visited[j]++;
        } else {
          visited[j] = 1;
        }
      }
    } else {
      for (let j = start + 1; j <= current; j++) {
        if (visited[j]) {
          visited[j]++;
        } else {
          visited[j] = 1;
        }
      }
    }
    start = current;
  }
  let max = Math.max(...Object.values(visited));
  let keys = Object.keys(visited);
  let mostVisited = keys.filter(x => visited[x] === max).sort((x, y) => x - y);
  return mostVisited;
}

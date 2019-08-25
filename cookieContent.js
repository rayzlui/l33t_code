//From 458 in LeetCode

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  if (s.length === 0) {
    return 0;
  }
  let content = 0;
  g.sort((a, b) => a - b);
  s.sort((x, y) => x - y);
  for (let i = 0; i < g.length; i++) {
    let current = g[i];

    for (let j = 0; j < s.length; j++) {
      let cookie = s[j];
      if (current <= cookie) {
        content++;
        s = s.slice(j + 1);
        break;
      } else if (j === s.length - 1) {
        return content;
      }
    }
    if (s.length === 0) {
      return content;
    }
  }
  return content;
}

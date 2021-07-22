//From 1936 in LeetCode

/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
function addRungs(rungs, dist) {
  let result = 0;
  let current = 0;
  for (let i = 0; i < rungs.length; i++) {
    let nextRung = rungs[i];
    if (nextRung - current > dist) {
      let diff = nextRung - current;
      let neededRungs = diff / dist;
      let noRemainder = Math.floor(neededRungs);
      if (neededRungs === noRemainder) {
        result += neededRungs - 1;
      } else {
        result += noRemainder;
      }
    }
    current = nextRung;
  }
  return result;
}

//From 492 in LeetCode

/**
 * @param {number} area
 * @return {number[]}
 */
function constructRectangle(area) {
  let mid = Math.sqrt(area);
  let wholeNum = Math.floor(mid);

  for (let i = wholeNum; i <= area; i++) {
    if (area % i === 0) {
      let other = area / i;
      return i > other ? [i, other] : [other, i];
    }
  }
}

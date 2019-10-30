//From 739 in LeetCode

/**
 * @param {number[]} T
 * @return {number[]}
 */
function dailyTemperatures(T) {
  let result = [];
  for (let i = 0; i < T.length; ) {
    let today = T.shift();
    let j = 0;
    for (; j < T.length; j++) {
      if (T[j] > today) {
        result.push(j + 1);
        break;
      }
    }
    if (j === T.length) {
      result.push(0);
    }
  }
  return result;
}

//From 1781 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function beautySum(s) {
  let result = 0;
  let store = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let nextCount = {};
    nextCount[char] = 1;
    for (let j = 0; j < store.length; j++) {
      let current = store[j];
      current[char] = current[char] + 1 || 1;
      let values = Object.values(current);
      let max = Math.max(...values);
      let min = Math.min(...values);
      result += max - min;
    }
    store.push(nextCount);
  }
  return result;
}

//From 905 of LeetCode

/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParity(array) {
  const result = [];
  array.forEach(x => {
    x % 2 === 1 ? result.push(x) : result.unshift(x);
  });
  return result;
}

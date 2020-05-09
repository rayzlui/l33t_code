//From 1409 in LeetCode

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
function processQueries(queries, m) {
  let array = new Array(m).fill(0).map((x, index) => index + 1);
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let curr = queries[i];
    let index = array.indexOf(curr);
    result.push(index);
    let removed = array.splice(index, 1)[0];
    array.unshift(removed);
  }
  return result;
}

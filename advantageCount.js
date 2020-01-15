//From 870 in LeetCode

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function advantageCount(A, B) {
  let sort = A.sort((x, y) => x - y);
  let result = [];
  for (let i = 0; i < B.length; i++) {
    let val = sort.findIndex(x => x > B[i]);
    if (val !== -1) {
      result.push(sort[val]);
      sort.splice(val, 1);
    } else {
      result.push(sort[0]);
      sort.splice(0, 1);
    }
  }
  return sort.length === 0 ? result : result.concat(sort);
}

//From 916 in LeetCode

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
function wordSubsets(A, B) {
  let countB = B.reduce((acc, x) => {
    let count = {};
    for (let i = 0; i < x.length; i++) {
      if (count[x[i]]) {
        count[x[i]]++;
      } else {
        count[x[i]] = 1;
      }
    }
    for (let a in count) {
      if (acc[a]) {
        acc[a] = Math.max(count[a], acc[a]);
      } else {
        acc[a] = count[a];
      }
    }
    return acc;
  }, {});
  let result = A.filter(x => {
    let copy = Object.assign({}, countB);
    for (let i = 0; i < x.length; i++) {
      if (copy[x[i]]) {
        copy[x[i]]--;
      }
    }
    let keys = Object.keys(copy);
    return keys.every(x => copy[x] <= 0);
  });
  return result;
}

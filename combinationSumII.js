//From 40 in LeetCode

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  let results = [];
  let seen = {};
  candidates = candidates.filter(x => x <= target);
  candidates = candidates.sort((x, y) => x - y);
  function recursion(source, array, sum) {
    if (source.length === 0) {
      return;
    }
    for (let i = 0; i < source.length; i++) {
      let copySum = sum;
      let current = source[i];
      let copy = array.slice();
      if (sum + current <= target) {
        copy.push(current);
        copySum += current;
        let string = copy.reduce((acc, curr) => acc + curr, '');
        if (copySum === target && seen[string] === undefined) {
          results.push(copy);
          seen[string] = true;
        }
        recursion(source.slice(i + 1), copy, copySum);
      } else {
        return;
      }
    }
  }
  recursion(candidates, [], 0);
  return results;
}

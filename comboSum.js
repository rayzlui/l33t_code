//From 39 in LeetCode

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  let result = [];
  function recursion(dictionary, array) {
    let newSum =
      array.length === 0 ? 0 : array.reduce((acc, curr) => acc + curr);
    for (let i = 0; i < dictionary.length; i++) {
      let inside = newSum + dictionary[i];
      let copy = array.slice();
      copy.push(dictionary[i]);
      if (inside === target) {
        result.push(copy);
      } else if (inside < target) {
        recursion(dictionary.slice(i), copy);
      }
    }
  }
  recursion(candidates, []);
  return result;
}

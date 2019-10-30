//From 406 in LeetCode

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
function reconstructQueue(people) {
  let result = [];
  let sort = people.sort((x, y) => {
    if (x[0] === y[0]) {
      return x[1] - y[1];
    } else {
      return y[0] - x[0];
    }
  });
  sort.forEach(x => {
    result.splice(x[1], 0, x);
  });
  return result;
}

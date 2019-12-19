//From 1281 in LeetCode

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
function groupThePeople(groupSizes) {
  let count = groupSizes.reduce((acc, curr, index) => {
    if (acc[curr]) {
      acc[curr].push(index);
    } else {
      acc[curr] = [index];
    }
    return acc;
  }, {});
  let result = [];
  for (let a in count) {
    while (count[a].length > 0) {
      let group = count[a].splice(0, a);
      result.push(group);
    }
  }
  return result;
}

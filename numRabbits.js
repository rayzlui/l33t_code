//From 781 in LeetCode

/**
 * @param {number[]} answers
 * @return {number}
 */
function numRabbits(answers) {
  let groupings = answers.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let result = 0;
  for (let a in groupings) {
    let num = a / 1;
    let count = groupings[a];
    if (num === 0) {
      result += count;
    } else {
      if (num + 1 >= count) {
        result += num + 1;
      } else {
        result += Math.ceil(count / (num + 1)) * (num + 1);
      }
    }
  }
  return result;
}

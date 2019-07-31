//From 937 in LeetCode

/**
 * @param {string[]} logs
 * @return {string[]}
 */
function reorderLogFiles(logs) {
  let split = logs.map(x => x.split(' '));
  let digit = split.filter(x => 0 / x[1] === 0 || x[1] / 1 === 0);
  let letter = split
    .filter(x => 0 / x[1] !== 0 && x[1] / 1 !== 0)
    .sort((x, y) => {
      if (x[1] > y[1]) {
        return 1;
      } else if (x[1] < y[1]) {
        return -1;
      } else {
        if (x[2] > y[2]) {
          return 1;
        } else if (x[2] < y[2]) {
          return -1;
        } else {
          if (x[0] > y[0]) {
            return 1;
          } else {
            return -1;
          }
        }
      }
    });
  let result = [];
  letter.forEach(x => result.push(x.join(' ')));
  digit.forEach(x => result.push(x.join(' ')));
  return result;
};

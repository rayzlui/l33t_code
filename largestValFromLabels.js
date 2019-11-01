//From 1090 in LeetCode

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
function largestValsFromLabels(values, labels, num_wanted, use_limit) {
  let labelValues = {};
  for (let i = 0; i < values.length; i++) {
    let label = labels[i];
    let value = values[i];
    let storedValues = labelValues[label];
    if (labelValues[label]) {
      if (labelValues[label].length < use_limit) {
        labelValues[label].push(value);
      } else {
        let min = Math.min(...labelValues[label]);
        if (min < value) {
          let index = labelValues[label].indexOf(min);
          labelValues[label].splice(index, 1);
          labelValues[label].push(value);
        }
      }
    } else {
      labelValues[label] = [value];
    }
  }
  let highest = [];
  for (let a in labelValues) {
    highest = highest.concat(labelValues[a]);
  }
  highest = highest.sort((x, y) => y - x);
  let max = highest.splice(0, num_wanted);
  return max.reduce((acc, curr) => acc + curr, 0);
};

//From 1338 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
  let counter = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let keys = Object.keys(counter).sort((x, y) => counter[y] - counter[x]);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < keys.length; i++) {
    sum += counter[keys[i]];
    count++;
    if (sum >= arr.length / 2) {
      return count;
    }
  }
}

//faster

/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSizeII(arr) {
  let counter = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let values = Object.values(counter).sort((x, y) => y - x);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    count++;
    if (sum >= arr.length / 2) {
      return count;
    }
  }
}

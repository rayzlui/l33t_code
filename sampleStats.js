//From 1093 in LeetCode

/**
 * @param {number[]} count
 * @return {number[]}
 */
function sampleStats(count) {
  let min = null;
  let max = null;
  let mean = 0;
  let mode = 0;
  let num = 0;
  let store = {};
  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      store[num] = i;
      if (min === null && count[i] > 0) {
        min = i;
      }
      if (count[i] > 0) {
        max = i;
      }
      mean += count[i] * i;
      num += count[i];
      mode = count[mode] > count[i] ? mode : i;
    }
  }
  let half = Math.floor(num / 2);
  let keys = Object.keys(store).map(x => x / 1);
  let median;
  if (num % 2 === 0) {
    if (store[half]) {
      let nextLower = keys[keys.indexOf(half) - 1];
      median = (store[half] + store[nextLower]) / 2;
    } else {
      median = store[keys[keys.findIndex(x => x >= half) - 1]];
    }
  } else {
    median = store[half]
      ? store[half]
      : store[keys[keys.findIndex(x => x >= half) - 1]];
  }
  return [min, max, mean / num, median, mode];
}

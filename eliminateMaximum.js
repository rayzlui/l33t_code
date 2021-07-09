//From 1921 in LeetCode

/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
function eliminateMaximum(dist, speed) {
  let times = {};
  let lowest = 10 ** 5 + 1;
  for (let i = 0; i < dist.length; i++) {
    let d = dist[i];
    let t = speed[i];
    let time = Math.ceil(d / t);
    if (times[time]) {
      times[time]++;
      lowest = time;
    } else {
      times[time] = 1;
    }
  }
  if (lowest === 10 ** 5 + 1) {
    return dist.length;
  }
  let result = 0;
  for (let num in times) {
    if (times[num] > 1) {
      if (num >= result + times[num]) {
        result += times[num];
      } else {
        return num > 0 ? num : 1;
      }
    } else {
      result++;
    }
  }
  return result;
}

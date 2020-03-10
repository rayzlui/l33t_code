//From 1375 in LeetCode

/**
 * @param {number[]} light
 * @return {number}
 */
function numTimesAllBlue(light) {
  //we want to see how many times the array is consecutive. just add it up.
  let result = 0;
  let currentCount = 0;
  let shouldBeCount = 0;
  for (let i = 0; i < light.length; i++) {
    let curr = light[i];
    currentCount += curr;
    shouldBeCount += i + 1;
    if (currentCount === shouldBeCount) {
      result++;
    }
  }
  return result;
}

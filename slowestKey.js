//From 1629 in LeetCode

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
function slowestKey(releaseTimes, keysPressed) {
  let times = releaseTimes.reduce((acc, time, index) => {
    let previousTime = releaseTimes[index - 1];
    let key = keysPressed[index];
    if (index === 0) {
      previousTime = 0;
    }
    let pressedTime = time - previousTime;
    if (acc[pressedTime]) {
      acc[pressedTime][key] = true;
    } else {
      acc[pressedTime] = {};
      acc[pressedTime][key] = true;
    }
    return acc;
  }, {});
  let timeKeys = Object.keys(times);
  let last = times[timeKeys[timeKeys.length - 1]];
  let sorted = Object.keys(last);
  return sorted[sorted.length - 1];
}

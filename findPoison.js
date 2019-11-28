//From 495 in LeetCode

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {
  if (timeSeries.length === 0) {
    return 0;
  }
  let result = 0;
  let lastAttack = timeSeries[0];
  for (let i = 1; i < timeSeries.length; i++) {
    let currentAttack = timeSeries[i];
    let diffAttack = currentAttack - lastAttack;
    if (diffAttack >= duration) {
      result += duration;
    } else {
      result += diffAttack;
    }
    lastAttack = currentAttack;
  }
  return (result += duration);
}

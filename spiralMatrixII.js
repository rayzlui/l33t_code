//From 885 in LeetCode

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
function spiralMatrixIII(R, C, r0, c0) {
  let currentLocation = [r0, c0];
  let result = [currentLocation.slice()];
  let direction = 0;
  let steps = 1;
  let stepChange = 0;
  while (result.length < R * C) {
    for (let i = 0; i < steps; i++) {
      switch (direction) {
        case 0:
          currentLocation[1]++;
          break;
        case 1:
          currentLocation[0]++;
          break;
        case 2:
          currentLocation[1]--;
          break;
        default:
          currentLocation[0]--;
          break;
      }
      if (
        currentLocation[0] >= 0 &&
        currentLocation[0] < R &&
        currentLocation[1] >= 0 &&
        currentLocation[1] < C
      ) {
        result.push(currentLocation.slice());
      }
    }
    direction = (direction + 1) % 4;
    if (direction % 2 === 0) {
      steps++;
    }
  }
  return result;
};

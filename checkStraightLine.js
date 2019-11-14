//From 1232 in LeetCode

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
function checkStraightLine(coordinates) {
  let firstDot = coordinates[0];
  let secondDot = coordinates[1];
  let difference = [firstDot[0] - secondDot[0], firstDot[1] - secondDot[1]];
  for (let i = 2; i < coordinates.length; i++) {
    let currentDot = coordinates[i];
    let differenceAgain = [
      firstDot[0] - currentDot[0],
      firstDot[1] - currentDot[1],
    ];
    if (difference[0] === 0) {
      if (differenceAgain[0] !== 0) {
        return false;
      }
    } else if (difference[1] === 0) {
      if (differenceAgain[1] !== 0) {
        return false;
      }
    } else {
      let scalar1 = differenceAgain[0] / difference[0];
      let scalar2 = differenceAgain[1] / difference[1];
      if (scalar1 !== scalar2) {
        return false;
      }
    }
  }

  return true;
}

//From 1298 in LeetCode

/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
function maxCandies(status, candies, keys, containedBoxes, initialBoxes) {
  let obtainedKeys = {};
  let obtainedBoxes = {};
  let openedBox = {};
  let result = 0;
  let queue = initialBoxes.slice();
  for (let i = 0; i < queue.length; i++) {
    let currentBox = queue[i];
    let boxStatus = status[currentBox];
    if (openedBox[currentBox] === undefined) {
      if (boxStatus === 1) {
        result += candies[currentBox];
        openedBox[currentBox] = true;
        if (keys[currentBox].length > 0) {
          keys[currentBox].forEach(x => {
            if (obtainedBoxes[x] && openedBox[x] === undefined) {
              result += obtainedBoxes[x];
              openedBox[x] = true;
            } else {
              obtainedKeys[x] = true;
            }
          });
        }
      } else {
        if (obtainedKeys[currentBox]) {
          result += candies[currentBox];
          openedBox[currentBox];
          if (keys[currentBox].length > 0) {
            keys[currentBox].forEach(x => {
              if (obtainedBoxes[x] && openedBox[x] === undefined) {
                result += obtainedBoxes[x];
                openedBox[x] = true;
              } else {
                obtainedKeys[x] = true;
              }
            });
          }
        } else {
          obtainedBoxes[currentBox] = candies[currentBox];
        }
      }
      if (containedBoxes[currentBox].length > 0) {
        queue.push(...containedBoxes[currentBox]);
      }
    }
  }
  return result;
}

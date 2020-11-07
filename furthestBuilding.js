//From 1642 in LeetCode

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
function binarySearch(array, input) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor(right / 2);
  if (input > array[array.length - 1]) {
    array.push(input);
    return array;
  }
  if (input < array[0]) {
    array.unshift(input);
    return array;
  }
  while (left < right) {
    if (input > array[middle]) {
      left = middle + 1;
    } else if (input < array[middle]) {
      right = middle;
    } else {
      array.splice(middle, 0, input);
      return array;
    }
    middle = Math.floor((left + right) / 2);
  }
  array.splice(left, 0, input);
  return array;
}

function furthestBuilding(heights, bricks, ladders) {
  //get as far as you can on bricks, keep track of ladder amount of highest values, then assume you replace all the highest with ladders, so continue with bricks and if next brick is larger than smallest previous bricks, we subtract previous bricks instead of next bricks
  if (ladders >= heights.length) {
    return heights.length - 1;
  }
  let highestHeights = [];
  let sumHighest = 0;
  let i = 0;

  while (bricks >= 0 && i < heights.length) {
    let current = heights[i];
    let nextBuilding = heights[i + 1];
    if (current < nextBuilding) {
      let diff = nextBuilding - current;
      if (bricks < diff) {
        break;
      }
      highestHeights = binarySearch(highestHeights, diff);

      sumHighest += diff;
      if (highestHeights.length > ladders) {
        let lowest = highestHeights.shift();
        sumHighest -= lowest;
      }
      bricks -= diff;
    }
    i++;
  }
  bricks += sumHighest;
  while (bricks >= 0 && i < heights.length) {
    let current = heights[i];
    let nextBuilding = heights[i + 1];
    if (current < nextBuilding) {
      let diff = nextBuilding - current;
      highestHeights = binarySearch(highestHeights, diff);

      if (highestHeights.length > ladders) {
        let lowest = highestHeights.shift();
        bricks -= lowest;
      }
    }
    i++;
  }
  if (i === heights.length) {
    return i - 1;
  }
  return bricks === 0 ? i : i - 1;
};

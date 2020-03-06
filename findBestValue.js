//From 1300 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function findBestValue(arr, target) {
  //divide target by arr.length to get what average should be.
  //determine which nums are below that and subtract diff
  //divide by amount below/subtract, add back to average.
  //check +1/-1 of that average to see which is closer to target
  let size = arr.length;
  let average = target / size;
  let underAmount = 0;
  let numberUnder = 0;
  arr.forEach(x => {
    if (x < average) {
      numberUnder++;
      underAmount += average - x;
    }
  });
  let overAmount = size - numberUnder;
  let increaseBy = underAmount / overAmount;
  average = average + increaseBy;

  let roundUp = Math.round(average);
  let roundDown = Math.floor(average);
  let up = 0;
  let down = 0;
  arr.forEach(x => {
    if (x > roundUp) {
      up += roundUp;
    } else {
      up += x;
    }
    if (x > roundDown) {
      down += roundDown;
    } else {
      down += x;
    }
  });
  return Math.abs(target - up) < Math.abs(target - down) ? roundUp : roundDown;
}

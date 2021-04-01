//From 1780 in LeetCode

/**
 * @param {number} n
 * @return {boolean}
 */
function checkPowersOfThree(n) {
  //start from 14

  let lookUp = {
    '0': 1,
    '1': 3,
    '2': 9,
    '3': 27,
    '4': 81,
    '5': 243,
    '6': 729,
    '7': 2187,
    '8': 6561,
    '9': 19683,
    '10': 59049,
    '11': 177147,
    '12': 531441,
    '13': 1594323,
    '14': 4782969,
    '15': 14348907,
  };
  let possibleSums = {
    '0': 1,
    '1': 4,
    '2': 13,
    '3': 40,
    '4': 121,
    '5': 364,
    '6': 1093,
    '7': 3280,
    '8': 9841,
    '9': 29524,
    '10': 88573,
    '11': 265720,
    '12': 797161,
    '13': 2391484,
    '14': 7174453,
    '15': 21523360,
  };

  let start = 15;
  while (lookUp[start] > n) {
    start--;
  }
  if (lookUp[start] === n) {
    return true;
  }

  while (possibleSums[start] >= n) {
    let dupN = n;
    let dupStart = start;
    while (dupStart >= 0) {
      dupN -= lookUp[dupStart];
      if (dupN === 0) {
        return true;
      }
      dupStart--;
      while (lookUp[dupStart] > dupN && dupStart >= 0) {
        dupStart--;
      }
    }
    start--;
    dupStart = start;
    dupN = n;
  }
  return false;
}

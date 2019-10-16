//From 849 in LeetCode

/**
 * @param {number[]} seats
 * @return {number}
 */
let maxDistToClosest = function(seats) {
  let closest = null;
  let max = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (i > 0 && closest === null) {
        max = i;
      }
      if (closest !== null) {
        max = Math.max(Math.floor((i - closest) / 2), max);
      }
      closest = i;
    } else if (i === seats.length - 1) {
      max = Math.max(Math.floor(i - closest), max);
    }
  }
  return max;
};

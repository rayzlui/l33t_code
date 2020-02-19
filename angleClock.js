//From 1344 in LeetCode

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */

const opposites = {
  1: 7,
  2: 8,
  3: 9,
  4: 10,
  5: 11,
  6: 0,
  7: 1,
  8: 2,
  9: 3,
  10: 4,
  11: 5,
  12: 6,
};
function angleClock(hour, minutes) {
  //each minute moved === 1/60 of a movement closer to the hour.
  //hour === 5 mins
  //each minute === 5/60 === 1/12 min
  //find opposite of hand to create 180 degree. then subtract degrees from the 180 and also alter the hour hand degree based on above calculations.
  let opp = opposites[hour];
  let shift = (minutes / 60) * 30; //this is in degrees because each 5 mins is 30 degrees and each 5 minutes represents a shift in hour so 3:50 would have the hour hand closer to 4 vs 3:30 and traveling that 30 degrees in shift from the hour hand. 360/12.
  //we need to know if minutes are on the 'left' or 'right' side of the opp.
  //if minutes is between opp and hour * 5, then it's on the left side of opp, else its right.
  let diff = Math.abs(opp * 5 - minutes);
  let degDif = diff * 6; //each minute is 6 degrees because 360/60
  let result;
  if (minutes <= opp * 5) {
    result = Math.abs(180 - degDif - shift);
  } else {
    result = Math.abs(180 + shift - degDif);
  }
  return result > 180 ? 360 - result : result;
}

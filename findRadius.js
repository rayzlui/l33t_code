//From 475 in LeetCode

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
function findRadius(houses, heaters) {
  //find closes heater to every houses, take the longest.
  let radii = [0];
  let covered = {};
  heaters.forEach(x => (covered[x] = true));
  houses = houses.filter(x => covered[x] === undefined);
  for (let i = 0; i < houses.length; i++) {
    let house = houses[i];
    let distances = heaters.map(x => Math.abs(x - house));
    radii.push(Math.min(...distances));
  }
  return Math.max(...radii);
}

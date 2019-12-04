//From 1276 in LeetCode

/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
function numOfBurgers(tomatoSlices, cheeseSlices) {
  if (tomatoSlices / 4 > cheeseSlices) {
    return [];
  }
  if (tomatoSlices % 2 === 1) {
    return [];
  }
  //it's just math. let y = large, let x = small, 4y + 2x === tomatoSlices && y + x === cheeseSlices
  for (let i = 0; i <= cheeseSlices; i++) {
    let opp = cheeseSlices - i;
    if (4 * opp + 2 * i === tomatoSlices) {
      return [opp, i];
    }
  }
  return [];
}

//faster with math

/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
function numOfBurgersII(tomatoSlices, cheeseSlices) {
  if (tomatoSlices / 4 > cheeseSlices) {
    return [];
  }
  if (tomatoSlices % 2 === 1) {
    return [];
  }
  let y = Math.floor((tomatoSlices - 2 * cheeseSlices) / 2);
  let x = cheeseSlices - y;
  return y < 0 || x < 0 ? [] : [y, x];
}

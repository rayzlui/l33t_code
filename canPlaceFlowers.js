//From 605 in LeetCode

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
  let indices = [];
  flowerbed.forEach((x, index) => {
    if (x === 1) {
      indices.push(index);
    }
  });

  if (flowerbed[flowerbed.length - 1] === 0) {
    indices.push(flowerbed.length + 1);
  }
  if (flowerbed[0] === 0) {
    indices.unshift(-2);
  }
  let max = 0;
  for (let i = 0; i < indices.length - 1; i++) {
    let diff = indices[i + 1] - indices[i] - 1;
    if (diff >= 3) {
      let flowers = Math.floor((diff - 1) / 2);
      max += flowers;
    }
  }

  return max >= n;
}

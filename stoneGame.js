//From 877 in LeetCode

/**
 * @param {number[]} piles
 * @return {boolean}
 */
function stoneGame(piles) {
  let alex = 0;
  let lee = 0;
  for (let i = 0; i < piles.length; ) {
    if (i % 2 === 0) {
      let front = piles[i];
      let back = piles[piles.length - 1];
      if (front === back) {
        let closeFront = piles[i + 1];
        let closeBack = piles[piles.length - 2];
        if (closeFront > closeBack) {
          alex += back;
          piles.splice(piles.length - 1, 1);
        } else {
          alex += front;
          piles.splice(i, 1);
        }
      } else if (front > back) {
        alex += front;
        piles.splice(i, 1);
      } else {
        alex += back;
        piles.splice(piles.length - 1, 1);
      }
    } else {
      let front = piles[i];
      let back = piles[piles.length - 1];
      if (front === back) {
        let closeFront = piles[i + 1];
        let closeBack = piles[piles.length - 2];
        if (closeFront > closeBack) {
          lee += back;
          piles.splice(piles.length - 1, 1);
        } else {
          lee += front;
          piles.splice(i, 1);
        }
      } else if (front > back) {
        lee += front;
        piles.splice(i, 1);
      } else {
        lee += back;
        piles.splice(piles.length - 1, 1);
      }
    }
  }
  return alex > lee;
}

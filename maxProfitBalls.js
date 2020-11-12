//From 1648 in LeetCode

/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
function summation(start) {
  return (BigInt(start) * (BigInt(start) + BigInt(1))) / BigInt(2);
}
function maxProfit(inventory, orders) {
  inventory.sort((x, y) => y - x);
  let seenBalls = 0;
  //seenBalls will be a multiplier, value of all balls after seen should be first ball in inventory
  let price = BigInt(0);
  while (orders > 0) {
    seenBalls++;
    let currentBall = inventory[0];
    let nextBall = inventory[1];
    let diff = currentBall - nextBall;
    if (seenBalls * diff > orders || inventory.length === 1) {
      let salePerBall = Math.floor(orders / seenBalls);

      let remainderBalls = orders % seenBalls;
      if (salePerBall === 0) {
        return Number(price + BigInt(orders) * BigInt(currentBall));
      }
      let soldBalls =
        BigInt(seenBalls) *
        (summation(currentBall) - summation(currentBall - salePerBall));
      let moreSoldBalls =
        BigInt(remainderBalls) * BigInt(currentBall - salePerBall);
      price += soldBalls + moreSoldBalls;
      return Number(price % BigInt(10 ** 9 + 7));
    } else {
      let soldBalls =
        BigInt(seenBalls) * (summation(currentBall) - summation(nextBall));
      price += soldBalls;
      inventory.shift();
      orders -= seenBalls * diff;
    }
  }
  return Number(price % BigInt(10 ** 9 + 7));
}

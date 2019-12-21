//From 638 in LeetCode

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
function shoppingOffers(price, special, needs) {
  let result = needs.reduce((acc, curr, index) => acc + curr * price[index], 0);
  special = special.filter(x => needs.every((y, index) => y >= x[index]));

  function recursion(needs, specials, costs) {
    let stillNeed = needs.reduce((x, y, index) => x + y * price[index], 0);
    result =
      stillNeed + costs >= 0 ? Math.min(result, stillNeed + costs) : result;
    if (specials.length === 0) {
      return;
    }
    for (let i = 0; i < specials.length; i++) {
      let needsCopy = needs.slice();
      let copy = specials[i].slice();
      let cost = copy.pop();
      let times = Infinity;
      for (let i = 0; i < needsCopy.length; i++) {
        if (copy[i] !== 0) {
          if (needsCopy[i] / copy[i] >= 0) {
            times = Math.min(times, Math.floor(needsCopy[i] / copy[i]));
          } else {
            times = 0;
            break;
          }
        }
      }
      if (times === 0) {
        cost = costs;
      } else {
        cost = cost * times + costs;
        recursion(
          needsCopy.map((x, index) => x - copy[index] * times),
          specials.slice(i + 1),
          cost,
        );
      }
    }
  }
  recursion(needs, special, 0);
  return result;
}

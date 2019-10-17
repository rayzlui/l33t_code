/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
function powerfulIntegers(x, y, bound) {
  if (x === 1 && y === 1) {
    if (bound >= 2) {
      return [2];
    } else {
      return [];
    }
  }
  let powerNums = [];

  let counter1 = 0;
  let goods = [];
  let [greater, lesser] = x > y ? [x, y] : [y, x];
  let num1 = 1;
  while (num1 <= bound) {
    num1 = greater ** counter1;
    if (num1 <= bound) {
      powerNums.push(num1);
    }
    counter1++;
  }
  let counter2 = 0;
  let num2 = 1;
  if (lesser <= 1) {
    for (let i = 0; i < powerNums.length; i++) {
      let combo = 1 + powerNums[i];
      if (combo <= bound) {
        goods.push(combo);
      } else {
        break;
      }
    }
  } else {
    while (num2 <= bound) {
      num2 = lesser ** counter2;
      let length = powerNums.length;
      for (let i = 0; i < length; i++) {
        let combo = num2 + powerNums[i];
        if (combo <= bound) {
          goods.push(combo);
        } else {
          break;
        }
      }
      if (num2 === 0) {
        break;
      }
      counter2++;
    }
  }
  let toSet = new Set(goods);
  return Array.from(toSet);
}

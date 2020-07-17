//From 1414 in LeetCode

/**
 * @param {number} k
 * @return {number}
 */
let fibs = [1, 1];
while (fibs[fibs.length - 1] < 10 ** 9) {
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
}
fibs.pop();
fibs.reverse();
function findMinFibonacciNumbers(k) {
  let count = 0;
  let needsToBe0 = k;
  let currFibs = fibs.slice();
  let i = 1;
  while (needsToBe0 !== 0) {
    while (needsToBe0 > 0) {
      needsToBe0 -= currFibs[0];
      count++;
      currFibs = currFibs.filter(x => x <= needsToBe0);
    }
    if (needsToBe0 !== 0) {
      needsToBe0 = k;
      count = 0;
      currFibs = fibs.slice(i);
      i++;
    }
  }
  return count;
}

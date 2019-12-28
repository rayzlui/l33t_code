//From 319 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function bulbSwitch(n) {
  //all primes are off because they're turned on at 1 and don't get touched until their own num and that turns it off
  //the rest depend on how many products of (x,y) < n === i, example is 4, it is divisible by 1, 2 and 4 so its odd therefore on, for 6 it is divisible by  1 2 3 6 therefore off as its even. 8 is divisible by 1, 2,4, 8 therefore off. 10 is divisible by 1, 2, 5, 10. 16 is divisible by 1, 2, 4 8, 16.
  //notice only square roots will have odd (because there's pairs and the square root itself which multiplies itself)
  //the num of square root up to n is the sqrt of n, which makes sense as there won't be another square root until we go to the next square number. aka 4 has two square roots under it (1, 2) and there won't be another square number until 9 which then there will be 3 (1, 2, 3) etc until n.

  return Math.floor(Math.sqrt(n));
}

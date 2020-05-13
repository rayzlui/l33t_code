//From 374 in LeetCode

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
function guessNumber(n) {
  let num = n;
  let reply = guess(num);
  while (reply !== 0) {
    if (reply === 1) {
      num++;
      reply = guess(num);
    } else {
      num--;
      reply = guess(num);
    }
  }
  return num;
}

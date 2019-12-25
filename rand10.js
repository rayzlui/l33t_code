//From 470 in LeetCode

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
function rand10() {
  let idx = rand7() + (rand7() - 1) * 7;
  while (idx > 40) {
    idx = rand7() + (rand7() - 1) * 7;
  }
  return 1 + ((idx - 1) % 10);
}

//From 507 in LeetCode

/**
 * @param {number} num
 * @return {boolean}
 */
function checkPerfectNumber(num) {
  if (num === 0) {
    return false;
  }
  let arr = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      arr += i;
    }
  }
  return arr === num;
};

//faster

/**
 * @param {number} num
 * @return {boolean}
 */
function checkPerfectNumber(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  let arr = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i === Math.sqrt(num)) {
        return false;
      }
      arr += i;
      arr += num / i;
    }
  }
  return arr === num;
};

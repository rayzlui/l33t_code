//From 1513 from LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function numSub(s) {
  let count = 0;
  let previousOnes = 0;
  for (let i = 0; i < s.length; i++) {
    let num = s[i];
    if (num === '1') {
      count++;
      if (previousOnes > 0) {
        count += previousOnes;
      }
      count = count % (10 ** 9 + 7);
      previousOnes++;
    } else {
      previousOnes = 0;
    }
  }
  return count;
}

//faster

/**
 * @param {string} s
 * @return {number}
 */
function summation(x) {
  let val = 0;
  for (let i = 1; i <= x; i++) {
    val += i;
  }
  return val;
}
function numSubII(s) {
  let count = 0;
  s.split('0').forEach(x => {
    count = (count + summation(x.length)) % (10 ** 9 + 7);
  });
  return count;
}

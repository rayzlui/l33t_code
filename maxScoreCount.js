//From 1422 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function maxScore(s) {
  s = s.split('');
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    let front = s.slice(0, i);
    let back = s.slice(i);
    max = Math.max(
      front.filter(x => x === '0').length + back.filter(x => x === '1').length,
      max,
    );
  }
  return max;
}
//faster

/**
 * @param {string} s
 * @return {number}
 */
function maxScoreII(s) {
  s = s.split('');
  let front = s.slice(0, 1).filter(x => x === '0').length;
  let back = s.slice(1).filter(x => x === '1').length;
  let max = front + back;
  for (let i = 1; i < s.length - 1; i++) {
    let current = s[i];
    if (current === '0') {
      front++;
    } else {
      back--;
    }
    max = Math.max(front + back, max);
  }
  return max;
}

//faster!!!!

/**
 * @param {string} s
 * @return {number}
 */
function maxScoreIII(s) {
  s = s.split('');
  let val = s.reduce(
    (acc, curr, index) => {
      if (index === 0) {
        if (curr === '0') {
          acc[0]++;
        }
      } else {
        if (curr === '1') {
          acc[1]++;
        }
      }
      return acc;
    },
    [0, 0],
  );
  let max = val[0] + val[1];
  for (let i = 1; i < s.length - 1; i++) {
    let current = s[i];
    if (current === '0') {
      val[0]++;
    } else {
      val[1]--;
    }
    max = Math.max(val[1] + val[0], max);
  }
  return max;
}

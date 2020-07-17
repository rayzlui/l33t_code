//From 1400 in LeetCode

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function canConstruct(s, k) {
  //number of odd letters need to be at most k
  if (s.length < k) {
    return false;
  }
  let count = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
  let odds = Object.keys(count).filter(x => count[x] % 2 === 1).length;
  return odds <= k;
}

//less memory

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function canConstructII(s, k) {
  //number of odd letters need to be at most k
  if (s.length < k) {
    return false;
  }
  let count = {};
  let odds = 0;
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (count[letter]) {
      count[letter]++;
      if (count[letter] % 2 === 1) {
        odds++;
      } else {
        odds--;
      }
    } else {
      count[letter] = 1;
      odds++;
    }
  }
  return odds <= k;
}

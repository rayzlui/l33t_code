//From 1456 in LeetCode

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
let vowels = 'aeiou'.split('').reduce((acc, curr) => {
  acc[curr] = true;
  return acc;
}, {});
function maxVowels(s, k) {
  let count = 0;
  for (let i = 0; i < k; i++) {
    let curr = s[i];
    if (vowels[curr]) {
      count++;
    }
  }
  let max = count;
  for (let i = k; i < s.length; i++) {
    let remove = s[i - k];
    let next = s[i];
    if (vowels[remove]) {
      count--;
    }
    if (vowels[next]) {
      count++;
    }
    max = Math.max(max, count);
  }
  return max;
}

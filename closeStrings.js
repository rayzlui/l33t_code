//From 1657 from LeetCode

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let count1 = {};
  let count2 = {};
  for (let i = 0; i < word1.length; i++) {
    let letter1 = word1[i];
    let letter2 = word2[i];
    if (count1[letter1]) {
      count1[letter1]++;
    } else {
      count1[letter1] = 1;
    }
    if (count2[letter2]) {
      count2[letter2]++;
    } else {
      count2[letter2] = 1;
    }
  }
  let letters1 = Object.keys(count1)
    .sort()
    .join('');
  let letters2 = Object.keys(count2)
    .sort()
    .join('');

  if (letters1 !== letters2) {
    return false;
  }
  let nums1 = Object.values(count1)
    .sort((x, y) => x - y)
    .join('');
  let nums2 = Object.values(count2)
    .sort((x, y) => x - y)
    .join('');

  if (nums1 !== nums2) {
    return false;
  }
  return true;
}

//From 1790 in LeetCode

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function areAlmostEqual(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let count1 = {};
  let count2 = {};
  let fail = 0;
  for (let i = 0; i < s1.length; i++) {
    let first = s1[i];
    let second = s2[i];
    if (first !== second) {
      if (count1[second] === undefined) {
        count2[second] = true;
      } else {
        delete count1[second];
      }
      if (count2[first] === undefined) {
        count1[first] = true;
      } else {
        delete count2[first];
      }
      fail++;
    }
    if (fail > 2) {
      return false;
    }
  }
  return (
    Object.values(count1).length === 0 && Object.values(count2).length === 0
  );
}

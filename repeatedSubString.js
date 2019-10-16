//From 459 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
let repeatedSubstringPattern = function(s) {
  if (s.length <= 1) {
    return false;
  }

  let counter = 0;
  for (let i = 0; i < s.length / 2; i++) {
    counter++;
    if (s.length % counter === 0) {
      let subSub = s.substring(0, counter);
      let isRepeat = true;
      for (let j = counter; j < s.length; j += counter) {
        let section = s.substring(j, counter + j);
        if (section !== subSub) {
          isRepeat = false;
          break;
        }
      }
      if (isRepeat) {
        return true;
      }
    }
  }
  return false;
};

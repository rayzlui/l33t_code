//From 921 in LeetCode

/**
 * @param {string} S
 * @return {number}
 */
function minAddToMakeValid(S) {
  let result = 0;
  let openPara = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      openPara++;
    } else {
      if (openPara < 1) {
        result++;
        openPara = 0;
      } else {
        openPara--;
      }
    }
  }
  return result + openPara;
}

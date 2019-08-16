//From 942 of LeetCode

/**
 * @param {string} S
 * @return {number[]}
 */
function diStringMatch(S) {
  let result = [];
  let end = S.length;
  let start = 0;
  for (let i = 0; i <= S.length; i++) {
    if (S[i] === 'I') {
      result.push(start);
      start++;
    } else {
      result.push(end);
      end--;
    }
  }
  return result;
};

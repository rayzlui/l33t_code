//From 1763 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function longestNiceSubstring(s) {
  let dp = new Array(s.length).fill(1).map(x => [new Set(), new Set()]);
  //dp[i][0] = needs to be empty, dp[i][1] will be matched
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    for (let j = 0; j <= i; j++) {
      let compare = dp[j];
      let shouldBeEmpty = compare[0];
      let isMatched = compare[1];
      let caseCheck =
        letter.toUpperCase() === letter
          ? letter.toLowerCase()
          : letter.toUpperCase();

      if (shouldBeEmpty.has(caseCheck)) {
        shouldBeEmpty.delete(caseCheck);
        isMatched.add(caseCheck);
        isMatched.add(letter);
      } else {
        if (!isMatched.has(caseCheck)) {
          shouldBeEmpty.add(letter);
        }
      }

      if (shouldBeEmpty.size === 0) {
        if (result.length < i - j + 1) {
          result = s.substring(j, i + 1);
        }
      }
      dp[j] = [shouldBeEmpty, isMatched];
    }
  }
  return result;
}

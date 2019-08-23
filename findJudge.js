//From 997 in LeetCode

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(N, trust) {
  let trusted = {};
  let doesTrust = [];
  if (N === 1 && trust.length === 0) {
    return 1;
  }
  trust.forEach(trusting => {
    trusted[trusting[1]] =
      trusted[trusting[1]] === undefined ? 1 : (trusted[trusting[1]] += 1);
    doesTrust.push(trusting[0]);
  });
  for (let possible in trusted) {
    if (trusted[possible] === N - 1 && !doesTrust.includes(possible / 1)) {
      return possible;
    }
  }

  return -1;
}

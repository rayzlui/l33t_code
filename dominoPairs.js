//From 1128 in LeetCode

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
let numEquivDominoPairs = function(dominoes) {
  let holder = {};
  let pairs = 0;
  for (let i = 0; i < dominoes.length; i++) {
    let current = dominoes[i];
    let combo = current.join('');
    let reverse = current.reverse().join('');
    if (holder[combo] || holder[reverse]) {
      pairs += holder[combo];
      holder[combo]++;
      if (combo !== reverse) {
        holder[reverse]++;
      }
    } else {
      holder[reverse] = 1;
      holder[combo] = 1;
    }
  }
  return pairs;
};

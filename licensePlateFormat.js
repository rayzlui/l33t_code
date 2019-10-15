//From 482 in LeetCode

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
let licenseKeyFormatting = function(S, K) {
  let array = S.split('-')
    .join('')
    .split('')
    .reverse();

  let string = [];
  for (let i = 0; i < array.length; ) {
    string.unshift(
      array
        .splice(i, K)
        .reverse()
        .join('')
        .toUpperCase(),
    );
  }
  return string.join('-');
};

//From 557 of LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s
    .split(' ')
    .map(x =>
      x
        .split('')
        .reverse('')
        .join(''),
    )
    .join(' ');
}

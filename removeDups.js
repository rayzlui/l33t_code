//From 1047 in LeetCode

/**
 * @param {string} S
 * @return {string}
 */
function removeDuplicates(S) {
  let array = S.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 2);
      i = -1;
    }
  }
  return array.join('');
};

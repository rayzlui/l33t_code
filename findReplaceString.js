//From 833 in LeetCode

/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
function findReplaceString(S, indexes, sources, targets) {
  let array = S.split('');
  for (let i = 0; i < indexes.length; i++) {
    let index = indexes[i];
    let source = sources[i];
    let compare = S.substr(index, source.length);
    if (compare === source) {
      array.splice(index, 1, targets[i]);
      for (let j = index + 1; j < index + source.length; j++) {
        array[j] = '';
      }
    }
  }
  return array.join('');
}

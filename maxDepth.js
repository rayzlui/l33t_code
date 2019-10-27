//From 1111 in LeetCode

/**
 * @param {string} seq
 * @return {number[]}
 */
function maxDepthAfterSplit(seq) {
  let result = [];
  let openA = 0;
  let openB = 0;
  for (let i = 0; i < seq.length; i++) {
    let current = seq[i];
    if (current === '(') {
      if (openA > openB) {
        openB++;
        result.push(1);
      } else {
        openA++;
        result.push(0);
      }
    } else {
      if (openA > 0) {
        result.push(0);
        openA--;
      } else {
        result.push(1);
        openB--;
      }
    }
  }
  return result;
};

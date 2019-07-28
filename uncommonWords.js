//For 884 in LeetCode

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
function uncommonFromSentences(A, B) {
  let arrayA = A.split(' ');
  let arrayB = B.split(' ');
  let result = [];
  arrayA.forEach((x, index) => {
    let copy = arrayA.slice();
    copy.splice(index, 1);
    if (!copy.includes(x) && !arrayB.includes(x)) {
      result.push(x);
    }
  });
  arrayB.forEach((x, index) => {
    let copy = arrayB.slice();
    copy.splice(index, 1);
    if (!copy.includes(x) && !arrayA.includes(x)) {
      result.push(x);
    }
  });
  return result;
}

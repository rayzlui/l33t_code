//From 1005 in LeetCode

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function largestSumAfterKNegations(A, K) {
  let positives = [];
  let negatives = [];
  let zero = false;
  for (let i = 0; i < A.length; i++) {
    let currentNum = A[i];
    if (currentNum > 0) {
      positives.push(currentNum);
    } else if (currentNum < 0) {
      negatives.push(currentNum);
    } else {
      zero = true;
    }
  }
  let sortedP = positives.sort((a, b) => a - b);
  let sortedN = negatives.sort((x, y) => x - y);
  if (K <= sortedN.length) {
    for (let j = 0; j < K; j++) {
      sortedN[j] = sortedN[j] * -1;
    }
  } else {
    let diff = K - sortedN.length;
    sortedN = sortedN.map(x => x * -1);
    if (diff % 2 === 1 && !zero) {
      let fullArray = sortedN.concat(sortedP).sort((x, y) => x > y);
      fullArray[0] = fullArray[0] * -1;

      return fullArray.reduce((acc, curr) => acc + curr, 0);
    }
  }

  return (
    sortedP.reduce((acc, curr) => acc + curr, 0) +
    sortedN.reduce((acc, curr) => acc + curr, 0)
  );
}

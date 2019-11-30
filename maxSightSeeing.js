//From 1014 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function maxScoreSightseeingPair(A) {
  //map first to last, go from start to end again and subtract current from vals. take highest
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    let current = A[i];
    for (let j = i + 1; j < A.length; j++) {
      let compare = A[j];
      max = Math.max(max, current + compare + i - j);
    }
  }
  return max;
}

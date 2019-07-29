//From 985 in LeetCode

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
function sumEvenAfterQueries(A, queries) {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let value = query[0];
    let index = query[1];
    A[index] += value;
    let sum = A.reduce((acc, curr) => {
      if (curr % 2 == 0) {
        acc += curr;
      }
      return acc;
    }, 0);
    result.push(sum);
  }
  return result;
}

//algorithm

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
function sumEvenAfterQueries2(A, queries) {
  let result = A.reduce((acc, curr) => {
    if (curr % 2 == 0) {
      acc += curr;
    }
    return acc;
  }, 0);
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let value = query[0];
    let index = query[1];
    if (A[index] % 2 === 0) {
      result -= A[index];
      if (value % 2 === 0) {
        result += A[index] + value;
      }
    } else {
      if (Math.abs(value % 2) === 1) {
        result += A[index] + value;
      }
    }
    A[index] += value;
    answer.push(result);
  }
  return answer;
}

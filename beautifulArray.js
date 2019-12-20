//From 932 in LeetCode

/**
 * @param {number} N
 * @return {number[]}
 */
function beautifulArray(num) {
  //essentially you can't have any consecutive subarrays aka can't have 1, 2, 3, even when its like 1, 4, 6, 2, 3 because 1, 2, 3 is still subarray.
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  function recursion(N) {
    if (N.length === 1) {
      return N;
    }
    let odds = [];
    let evens = [];
    for (let i = 0; i < N.length; i++) {
      if (i % 2 === 0) {
        evens.push(N[i]);
      } else {
        odds.push(N[i]);
      }
    }
    let left = recursion(odds);
    let right = recursion(evens);
    return left.concat(right);
  }
  return recursion(array);
}

//From 922 in LeetCode

/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParityII(A) {
  let even = A.filter(x => x % 2 === 0);
  let odd = A.filter(x => x % 2 === 1);
  let result = [];
  for (let i = 0; i < even.length; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }
  return result;
}

//From 338 in LeetCode

/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    let bitRep = i.toString(2);
    result.push(bitRep.split('').filter(x => x / 1 === 1).length);
  }
  return result;
}

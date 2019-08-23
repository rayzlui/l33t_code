//From 453 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves(nums) {
  let moves = 0;
  let min = Math.min(...nums);
  nums.forEach(element => {
    if (element > min) {
      moves += element - min;
    }
  });
  return moves;
}

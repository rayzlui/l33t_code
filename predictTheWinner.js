//From 486 in LeetCode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function minimax(count, array, turn) {
  if (array.length === 0) {
    return count;
  }
  let left = array[0];
  let right = array[array.length - 1];
  let newLeft = turn ? count + left : count - left;
  let newRight = turn ? count + right : count - right;
  let newArrL = array.slice(1);
  let newArrR = array.slice(0, array.length - 1);
  let l = minimax(newLeft, newArrL, !turn);
  let r = minimax(newRight, newArrR, !turn);
  return turn ? Math.max(l, r) : Math.min(l, r);
}
function PredictTheWinner(nums) {
  let winner = minimax(0, nums, true);
  return winner >= 0;
}

//From 1703 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minMoves(nums, k) {
  //if left isn't 1 keep adding left
  //if right isnt 1 keep adding right

  let left = 0;
  let right = 0;
  let countOnes = 0;
  let answer = Infinity;
  let ones = [];
  let first = true;
  while (right <= nums.length) {
    if (countOnes < k) {
      if (nums[right] === 1) {
        ones.push(right);
      }
      let current = nums[right];
      countOnes += current;
      right++;
    } else {
      let result = 0;
      let forwardOnes = 0;

      if (right - left + 1 === k || answer === 0) {
        return 0;
      }
      for (let i = 1; i <= k / 2; i++) {
        let diff = ones[i] - ones[i - 1] - 1;
        result += diff * i;
      }

      for (let i = k - 1; i > k / 2; i--) {
        let diff = ones[i] - ones[i - 1] - 1;
        result += diff * (k - i);
      }
      answer = Math.min(result, answer);
      countOnes--;
      let nextOne = ones.shift();
      left = nextOne;
      right = right > left ? right : left + 1;
    }
  }

  return answer;
}

//From 519 in LeetCode

/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
class Solution {
  constructor(n_rows, n_cols) {
    this.matrix = new Array(n_rows).fill(new Array(n_cols).fill(0));
    this.flipped = {};
  }
}

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
  let randomRow = Math.floor(Math.random() * this.matrix.length);
  let randomColumn = Math.floor(Math.random() * this.matrix[0].length);
  while (this.flipped[`${randomRow}${randomColumn}`] === true) {
    randomRow = Math.floor(Math.random() * this.matrix.length);
    randomColumn = Math.floor(Math.random() * this.matrix[0].length);
  }
  this.matrix[randomRow][randomColumn] = 1;
  this.flipped[`${randomRow}${randomColumn}`] = true;
  return [randomRow, randomColumn];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
  this.matrix = new Array(this.matrix.length).fill(
    new Array(this.matrix[0].length).fill(0),
  );
  this.flipped = {};
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */

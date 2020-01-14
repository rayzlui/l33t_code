//From 855 in LeetCode

/**
 * @param {number} N
 */
class ExamRoom {
  constructor(N) {
    this.seats = [];
    this.N = N;
  }
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
  let diff = [0, 0];
  let zeroGap = 0;
  let endGap = 0;

  this.seats = this.seats.sort((x, y) => x - y);
  if (this.seats[0] !== 0) {
    zeroGap = this.seats[0];
  }
  if (this.seats[this.seats.length - 1] !== this.N - 1) {
    endGap = this.N - 1 - this.seats[this.seats.length - 1];
  }
  for (let i = 0; i < this.seats.length - 1; i++) {
    let gap = Math.floor((this.seats[i + 1] - this.seats[i]) / 2);

    diff =
      Math.floor((diff[1] - diff[0]) / 2) < gap
        ? [this.seats[i], this.seats[i + 1]]
        : diff;
  }
  let mid = Math.floor((diff[0] + diff[1]) / 2);
  let midGap = diff[1] - mid;
  let greatest = Math.max(zeroGap, endGap, midGap);
  if (greatest === zeroGap) {
    this.seats.unshift(0);
    return 0;
  } else if (greatest === endGap) {
    if (endGap === mid) {
      this.seats.push(mid);
      return mid;
    } else {
      this.seats.push(this.N - 1);
      return this.N - 1;
    }
  } else {
    this.seats.push(mid);
    return mid;
  }
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
  let index = this.seats.indexOf(p);
  this.seats.splice(index, 1);
  return null;
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */

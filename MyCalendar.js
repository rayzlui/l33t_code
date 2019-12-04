//From 729 in LeetCode

class MyCalendar {
  constructor() {
    this.calendar = {};
  }
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (let a in this.calendar) {
    if (start >= a / 1) {
      if (start < this.calendar[a] / 1) {
        return false;
      }
    }
    if (end <= this.calendar[a] / 1) {
      if (end > a / 1) {
        return false;
      }
    }
    if (start < a / 1) {
      if (end >= this.calendar[a] / 1) {
        return false;
      }
    }
  }
  this.calendar[start] = end;
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

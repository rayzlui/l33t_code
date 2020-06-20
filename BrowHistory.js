//From 1472 in LeetCode

/**
 * @param {string} homepage
 */
class BrowserHistory {
  constructor(homepage) {
    this.current = 0;
    this.size = 1;
    this.visited = {};
    this.visited[0] = homepage;
  }
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.current++;
  this.visited[this.current] = url;
  this.size = this.current + 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.current -= steps;
  if (this.current <= 0) {
    this.current = 0;
    return this.visited[0];
  }
  return this.visited[this.current];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.current += steps;
  if (this.current >= this.size - 1) {
    this.current = this.size - 1;
    return this.visited[this.size - 1];
  }
  return this.visited[this.current];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

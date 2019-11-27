//For 677 in LeetCode

/**
 * Initialize your data structure here.
 */
class MapSum {
  constructor() {
    this.pairs = {};
  }
}

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.pairs[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let length = prefix.length;
  let value = 0;
  for (let a in this.pairs) {
    let wordPrefix = a.substr(0, length);
    if (prefix === wordPrefix) {
      value += this.pairs[a];
    }
  }
  return value;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

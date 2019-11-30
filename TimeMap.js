//From 981 in LeetCode

/**
 * Initialize your data structure here.
 */
class TimeMap {
  constructor() {
    this.store = {};
  }
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.store[key] === undefined) {
    this.store[key] = {};
  }
  this.store[key][timestamp] = value;
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  let getKey = this.store[key];
  if (getKey[timestamp]) {
    return getKey[timestamp];
  } else {
    for (let i = timestamp; i >= 0; i--) {
      if (getKey[i] !== undefined) {
        return getKey[i];
      }
    }
    return '';
  }
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

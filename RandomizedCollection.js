//From 381 in LeetCode

/**
 * Initialize your data structure here.
 */
class RandomizedCollection {
  constructor() {
    this.collection = {};
    this.tracker = {};
    this.random = [];
    this.count = 0;
  }
}

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  if (this.collection[val]) {
    this.collection[val].push(this.count);
  } else {
    this.collection[val] = [this.count];
  }
  this.tracker[this.count] = val;
  this.random.push(this.count);
  this.count++;
  return this.collection[val].length === 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (this.collection[val]) {
    let index = this.collection[val].pop();
    let remove = this.random.indexOf(index);
    this.random.splice(remove, 1);
    if (this.collection[val].length === 0) {
      delete this.collection[val];
    }
    delete this.tracker[index];
    return true;
  }
  return false;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  let rand = Math.floor(Math.random() * this.random.length);
  return this.tracker[this.random[rand]];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

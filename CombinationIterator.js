//From 1286 in LeetCode

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
class CombinationIterator {
  constructor(characters, combinationLength) {
    let iterations = [];
    function recursion(array, dictionary) {
      if (array.length === combinationLength) {
        iterations.push(array.join(''));
        return;
      }
      for (let i = 0; i < dictionary.length; i++) {
        let current = dictionary[i];
        let copy = array.slice();
        copy.push(current);
        recursion(copy, dictionary.slice(i + 1));
      }
    }
    recursion([], characters.split(''));
    this.iterations = iterations;
  }
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  return this.iterations.shift();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return this.iterations.length > 0;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

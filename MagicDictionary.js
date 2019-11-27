//From 676 in LeetCode

/**
 * Initialize your data structure here.
 */
class MagicDictionary {
  constructor() {
    this.dict = [];
  }
}

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  dict.forEach(x => this.dict.push(x));
  return null;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  let count = word.split('').reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let search = this.dict.filter(x => x.length === word.length);
  if (search.length === 0) {
    return false;
  } else {
    return search.some(dict => {
      let copy = Object.assign({}, count);
      let value = 0;
      let index = null;
      for (let i = 0; i < dict.length; i++) {
        if (copy[dict[i]] > 0) {
          value++;
          copy[dict[i]]--;
        } else {
          index = i;
        }
      }

      if (value === dict.length - 1) {
        let isDict = dict.substr(0, index) + dict.substr(index + 1);
        let isWord = word.substr(0, index) + word.substr(index + 1);
        if (isDict === isWord) {
          return true;
        }
      } else {
        false;
      }
    });
  }
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

//From 208 in LeetCode

/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.searchWords = {};
    this.startWith = {};
  }
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.searchWords[word] = true;
  let sections = '';
  for (let i = 0; i < word.length; i++) {
    sections += word[i];
    this.startWith[sections] = true;
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return !!this.searchWords[word];
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return !!this.startWith[prefix];
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

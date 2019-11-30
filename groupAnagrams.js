//From 49 in LeetCode

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
  let first = strs[0];
  let result = {};
  result[first] = [strs[0]];
  strs.shift();
  strs.forEach(x => {
    for (let a in result) {
      if (isAnagram(a, x)) {
        result[a].push(x);
        return;
      }
    }
    result[x] = [x];
  });
  return Object.values(result);
}

function isAnagram(word1, word2) {
  word2 = word2.split('');
  if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {
      let index = word2.indexOf(word1[i]);
      if (index === -1) {
        return false;
      } else {
        word2.splice(index, 1);
      }
    }
    return true;
  }
  return false;
}

//faster

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagramsII(strs) {
  let result = [];
  for (let i = 0; i < strs.length; ) {
    let current = strs[i];
    let anagrams = strs.filter(x => isAnagram(x, current));

    result.push(anagrams);
    strs = strs.filter(x => !isAnagram(x, current));
  }
  return result;
}

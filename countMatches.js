//From 1773 in LeetCode

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(items, ruleKey, ruleValue) {
  let key = {};
  key['type'] = 0;
  key['color'] = 1;
  key['name'] = 2;
  return items.filter(x => x[key[ruleKey]] === ruleValue).length;
}

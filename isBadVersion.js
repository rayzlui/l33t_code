//From 278 in LeetCode

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  let badVersion = isBadVersion;
  return function(n) {
    let searchSize = n;
    let holder = 0;
    for (let i = 0; i <= n; i++) {
      let halfSearch = Math.ceil(searchSize / 2);
      let halfPoint = halfSearch + holder;
      if (!isBadVersion(halfPoint)) {
        holder = halfPoint;
      }
      searchSize = halfSearch;
      if (searchSize === 1) {
        return holder + 1;
      }
    }
  };
}

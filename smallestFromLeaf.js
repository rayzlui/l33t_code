//From 988 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
function smallestFromLeaf(root) {
  let result = [Infinity];
  function recursion(branch, stored) {
    stored.unshift(branch.val);

    if (branch.left === null && branch.right === null) {
      if (result.length === 1) {
        result = stored;
      } else {
        if (stored[0] < result[0]) {
          if (stored.length >= 2) {
            result = stored;
          }
        } else if (stored[0] === result[0]) {
          let copyValue = stored[0];
          let copyResult = result[0];

          for (let i = 1; i < stored.length; i++) {
            copyValue = stored[i];
            copyResult = result[i];
            if (copyValue !== copyResult) {
              result = copyResult > copyValue ? stored : result;

              return;
            }
          }
          result = stored.length > result.length ? result : stored;
        }
      }
      return;
    }
    if (branch.left) {
      recursion(branch.left, stored.slice());
    }
    if (branch.right) {
      recursion(branch.right, stored.slice());
    }
  }
  recursion(root, []);
  return result.reduce((acc, curr) => acc + alphabet[curr], '');
}

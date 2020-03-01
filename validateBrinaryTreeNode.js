//From 1361 in LeetCode

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
function validateBinaryTreeNodes(n, leftChild, rightChild) {
  //needs to cycle + only lands on once.
  let seen = {};
  for (let i = 0; i < n; i++) {
    let left = leftChild[i];
    let right = rightChild[i];
    if (seen[left] || seen[right]) {
      return false;
    }
    if (left !== -1) {
      seen[left] = true;
    }
    if (right !== -1) {
      seen[right] = true;
    }
  }
  let keys = Object.keys(seen).length;
  return keys === n - 1;
}

//faster

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
function validateBinaryTreeNodesII(n, leftChild, rightChild) {
  //needs to cycle + only lands on once.
  let seen = new Map();
  for (let i = 0; i < n; i++) {
    let left = leftChild[i];
    let right = rightChild[i];
    if (seen.get(left) || seen.get(right)) {
      return false;
    }
    if (left !== -1) {
      seen.set(left, true);
    }
    if (right !== -1) {
      seen.set(right, true);
    }
  }
  return seen.size === n - 1;
}

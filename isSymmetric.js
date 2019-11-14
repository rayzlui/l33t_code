//From 101 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetricRecursive(root) {
  if (root === null) {
    return true;
  }
  if (root.left && root.right) {
    let left = [root.left.val];
    let right = [root.right.val];
    function recursion(branch, side) {
      if (branch === null) {
        return null;
      }
      let returnL = null;
      let returnR = null;
      let first = side === right ? branch.left : branch.right;
      let second = side === right ? branch.right : branch.left;
      if (first) {
        returnL = recursion(first, side);
      }
      if (second) {
        returnR = recursion(second, side);
      }
      if (side === right) {
        right.push(returnL, returnR);
      } else {
        left.push(returnL, returnR);
      }
      return branch.val;
    }

    recursion(root.left, left);
    recursion(root.right, right);
    return (
      left.every((val, index) => val === right[index]) &&
      left.length === right.length
    );
  } else {
    if (root.left === null && root.right === null) {
      return true;
    } else {
      return false;
    }
  }
}

//iterative

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetricIterative(root) {
  if (root === null) {
    return true;
  }
  if (root.left && root.right) {
    if (root.left.val !== root.right.val) {
      return false;
    }
  }
  let queue = [[root.left, root.right]];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    let first = current[0];
    let second = current[1];
    if (first === null && second === null) {
      return true;
    }
    if (first === null || second === null) {
      if (first !== null || second !== null) {
        return false;
      }
    }
    let firstLeft = first.left;
    let secondRight = second.right;
    if (firstLeft !== null && secondRight !== null) {
      if (firstLeft.val !== secondRight.val) {
        return false;
      } else {
        queue.push([firstLeft, secondRight]);
      }
    } else {
      if (
        (firstLeft === null || secondRight === null) &&
        (firstLeft !== null || secondRight !== null)
      ) {
        return false;
      }
    }
    let firstRight = first.right;
    let secondLeft = second.left;
    if (firstRight !== null && secondLeft !== null) {
      if (firstRight.val !== secondLeft.val) {
        return false;
      } else {
        queue.push([firstRight, secondLeft]);
      }
    } else {
      if (
        (firstRight === null || secondLeft === null) &&
        (firstRight !== null || secondLeft !== null)
      ) {
        return false;
      }
    }
  }
  return true;
}

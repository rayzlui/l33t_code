//From 100 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function push(arr){  
    return function(val){
        arr.push(val)
    }
}
function recursion(branch, func){
    func(branch.val)
    if (branch.left === null && branch.right === null){
        return
    }
    if(branch.left){
        recursion(branch.left, func)
    }else{
        if(branch.right){
            func(null)
        }
    }
    if (branch.right){
        recursion(branch.right, func)
    }
    
}
function isSameTree(p, q) {
    if (p===null && q === null){
        return true
    }
    if (p===null || q === null){
        return false
    }
    let pVals = []
    let qVals = []
    recursion(p, push(pVals))
    recursion(q, push(qVals))
    return pVals.every((x, index) => x === qVals[index])
};

//faster

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function recursion(branch1, branch2){
  if (branch1 === null && branch2 === null){
      return true
  }
  if (branch1 === null || branch2 === null){
      return false
  }
  if (branch1.val !== branch2.val){
      return false
  }
  let left = recursion(branch1.right, branch2.right)
  if (!left){
      return left
  }
  let right = recursion(branch1.left, branch2.left)
  if (!right){
      return right
  }
  return true

}

function isSameTree(p, q) {
  if (p===null && q === null){
      return true
  }
  if (p===null || q === null){
      return false
  }
  
  return recursion(p,q)
};
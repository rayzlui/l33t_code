//From 82 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (head === null) {
    return null;
  }
  let seen = new Map();
  let current = head;
  let vals = [];
  while (current) {
    if (seen[current.val]) {
      seen[current.val]++;
    } else {
      seen[current.val] = 1;
    }
    vals.push(current.val);
    current = current.next;
  }
  let keys = vals.filter(x => seen[x] === 1);
  if (keys.length === 0) {
    return null;
  }
  let newHead = new ListNode(keys.shift());
  keys.reduce((acc, curr) => {
    acc.next = new ListNode(curr);
    return acc.next;
  }, newHead);
  return newHead;
}

//recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicatesII(head) {
  if (head === null) {
    return null;
  }
  let seen = {};
  function recursion(node) {
    if (seen[node.val]) {
      seen[node.val]++;
    } else {
      seen[node.val] = 1;
    }
    if (node.next === null) {
      return seen[node.val] > 1 ? null : node;
    }
    let nextNode = recursion(node.next);
    if (seen[node.val] > 1) {
      return nextNode;
    } else {
      node.next = nextNode;
      return node;
    }
  }

  return recursion(head);
}

//no hash

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicatesIII(head) {
  if (head === null) {
    return null;
  }
  function recursion(node) {
    if (node.next === null) {
      return [node.val, node];
    }
    let nextNode = recursion(node.next);
    if (nextNode[0] === node.val) {
      if (nextNode[1]) {
        return node.val === nextNode[1].val
          ? [node.val, nextNode[1].next]
          : [node.val, nextNode[1]];
      }
      return [node.val, null];
    } else {
      node.next = nextNode[1];
      return [node.val, node];
    }
  }

  return recursion(head)[1];
}

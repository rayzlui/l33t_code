//From 430 in LeetCode

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
function flatten(head) {
  if (head === null) {
    return null;
  }
  function recursion(link) {
    let childs;
    if (link.child) {
      let oldNext = link.next;
      childs = recursion(link.child);
      link.child = null;
      link.next = childs[0];
      if (oldNext) {
        childs[1].next = oldNext;
        childs = recursion(oldNext);
      }
    } else if (link.next) {
      childs = recursion(link.next);
    }
    if (link.next === null) {
      return [link, link];
    }
    return [link, childs[1]];
  }
  recursion(head);
  let current = head;
  let previous;
  while (current) {
    if (previous) {
      current.prev = previous;
    }
    previous = current;
    current = current.next;
  }
  return head;
}

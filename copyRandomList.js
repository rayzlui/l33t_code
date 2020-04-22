//From 138 in LeetCode

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  if (head === null) {
    return head;
  }
  let newNodes = [];
  let randoms = [];
  let current = head;
  while (current) {
    let newNode = new Node(current.val, null, null);
    newNodes.push(newNode);
    randoms.push(current.random);
    current = current.next;
  }
  current = head;
  let i = 0;
  while (current) {
    let index = randoms.reduce((acc, x, index) => {
      if (current === x) {
        acc.push(index);
      }
      return acc;
    }, []);
    if (index.length > 0) {
      index.forEach(x => (newNodes[x].random = newNodes[i]));
    }
    i++;
    current = current.next;
  }
  newNodes.reduce((acc, curr) => {
    if (acc === undefined) {
      acc = curr;
    } else {
      acc.next = curr;
      acc = acc.next;
    }
    return acc;
  });
  return newNodes[0];
}

//From 133 in LeetCode

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  if (node === null) {
    return node;
  }
  let holder = {};
  let seen = {};
  let queue = [node];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    seen[current.val] = true;
    holder[current.val] = new Node(current.val);
    let neighbors = current.neighbors;
    neighbors.forEach(x => {
      if (seen[x.val] === undefined) {
        queue.push(x);
        seen[x.val] = true;
      }
    });
  }
  queue.forEach(x => {
    holder[x.val].neighbors.push(...x.neighbors.map(y => holder[y.val]));
  });
  return holder[node.val];
}

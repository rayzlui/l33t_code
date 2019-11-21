//From 1104 in LeetCode

/**
 * @param {number} label
 * @return {number[]}
 */
const binary = [1];
for (let i = 0; i < 20; i++) {
  let next = binary[i] * 2;
  binary.push(next);
}
binary.reverse();
function pathInZigZagTree(label) {
  let path = [label];
  while (label !== 1) {
    let onRow = binary.find(x => x <= label);
    let distFromEnd = Math.floor((label - onRow) / 2);
    let rowUp = onRow - 1 - distFromEnd;
    path.unshift(rowUp);
    label = rowUp;
  }
  return path;
}

//From 1598 in LeetCode

/**
 * @param {string[]} logs
 * @return {number}
 */
function minOperations(logs) {
  let steps = 0;
  for (let i = 0; i < logs.length; i++) {
    let action = logs[i];
    switch (action) {
      case '../':
        steps = steps === 0 ? 0 : steps - 1;
        break;
      case './':
        break;
      default:
        steps++;
    }
  }
  return steps;
}

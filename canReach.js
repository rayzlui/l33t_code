//From 1306 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
function canReach(arr, start) {
  //recursion through two paths, ends either when we hit target or it cycles.
  let visitedIndices = {};
  if (arr[start] === 0) {
    return true;
  }
  let queue = [start + arr[start], start - arr[start]];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (arr[current] === 0) {
      return true;
    }
    let add = current + arr[current];
    let sub = current - arr[current];
    if (visitedIndices[add] && visitedIndices[sub]) {
      return false; //this means both have cycled
    }
    if (visitedIndices[add] === undefined && add < arr.length) {
      queue.push(add);
      visitedIndices[add] = true;
    }
    if (visitedIndices[sub] === undefined && sub < arr.length) {
      queue.push(sub);
      visitedIndices[sub] = true;
    }
  }
  return false;
}

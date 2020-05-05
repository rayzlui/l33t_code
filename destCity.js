//From 1436 in LeetCode

/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  return paths.find(route => {
    let start = route[0];
    let destination = route[1];
    if (!paths.some(x => x[0] === destination)) {
      return true;
    }
  })[1];
}

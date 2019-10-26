//From 797 in LeetCode

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
  let paths = [];

  function getPaths(travels) {
    let currentSpot = travels[travels.length - 1];
    if (currentSpot === graph.length - 1) {
      paths.push(travels);
      return;
    }
    let nextSpots = graph[currentSpot];
    for (let i = 0; i < nextSpots.length; i++) {
      let copyTravels = travels.slice();
      copyTravels.push(nextSpots[i]);
      getPaths(copyTravels);
    }
  }
  getPaths([0]);
  return paths;
}

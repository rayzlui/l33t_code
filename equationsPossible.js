//From 990 in LeetCode

/**
 * @param {string[]} equations
 * @return {boolean}
 */
function equationsPossible(equations) {
  let truths = equations.filter(x => x.indexOf('!') === -1);
  let falses = equations.filter(x => x.indexOf('!') !== -1);
  let truthHolder = truths.reduce((acc, curr) => {
    let values = curr.split('==');
    let x = values[0];
    let y = values[1];
    if (acc[x]) {
      let keys = Object.keys(acc[x]);
      keys.forEach(del => {
        acc[del][y] = true;
      });
      acc[x][y] = true;
    } else {
      acc[x] = {};
      acc[x][y] = true;
    }
    if (acc[y]) {
      let keys = Object.keys(acc[y]);
      keys.forEach(del => {
        acc[del][x] = true;
      });
      acc[y][x] = true;
    } else {
      acc[y] = {};
      acc[y][x] = true;
    }
    return acc;
  }, {});
  for (let i = 0; i < falses.length; i++) {
    let current = falses[i];
    let vals = current.split('!=');
    let a = vals[0];
    let b = vals[1];
    if (a === b) {
      return false;
    }
    if (truthHolder[a]) {
      if (truthHolder[a][b]) {
        return false;
      }
      let visitedA = {};
      let checkA = truthHolder[a];
      let objA = Object.keys(checkA);
      while (objA.some(x => visitedA[x] === undefined)) {
        let nextKeys = [];
        for (let i = 0; i < objA.length; i++) {
          let curr = objA[i];
          if (visitedA[curr] === undefined) {
            visitedA[curr] = true;
            if (truthHolder[curr][b]) {
              return false;
            }
            let newKeys = Object.keys(truthHolder[curr]).filter(
              x => visitedA[x] === undefined,
            );
            nextKeys = nextKeys.concat(newKeys);
          }
        }
        objA = nextKeys;
      }
    }
    if (truthHolder[b]) {
      if (truthHolder[b][a]) {
        return false;
      }
      let visitedB = {};
      let check = truthHolder[b];
      let objB = Object.keys(check);
      while (objB.some(x => visitedB[x] === undefined)) {
        let nextKeys = [];
        for (let i = 0; i < objB.length; i++) {
          let curr = objB[i];
          if (visitedB[curr] === undefined) {
            visitedB[curr] = true;
            if (truthHolder[curr][a]) {
              return false;
            }

            let newKeys = Object.keys(truthHolder[curr]).filter(
              x => visitedB[x] === undefined,
            );
            nextKeys = nextKeys.concat(newKeys);
          }
        }
        objB = nextKeys;
      }
    }
  }
  return true;
}

//From 609 in LeetCode

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
function findDuplicate(paths) {
  let results = {};
  paths = paths.forEach(path => {
    let split = path.split(' ');
    split = split.map(x => split[0] + '/' + x);
    split.shift();
    split.forEach(single => {
      let par = single.split('(');
      if (results[par[1]]) {
        results[par[1]].push(par[0]);
      } else {
        results[par[1]] = [par[0]];
      }
    });
  });
  let answer = [];
  for (let file in results) {
    if (results[file].length > 1) {
      answer.push(results[file]);
    }
  }
  return answer;
}

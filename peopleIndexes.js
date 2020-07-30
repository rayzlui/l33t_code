//From 1452 in LeetCode

/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
function peopleIndexes(favoriteCompanies) {
  let count = favoriteCompanies.reduce((acc, current, index) => {
    current.forEach(curr => {
      if (acc[curr]) {
        acc[curr].push(index);
      } else {
        acc[curr] = [index];
      }
    });
    favoriteCompanies[index] = [current, index];
    return acc;
  }, {});
  let result = [];
  favoriteCompanies.sort((x, y) => x[0].length - y[0].length);
  for (let i = 0; i < favoriteCompanies.length; i++) {
    let person = favoriteCompanies[i];
    let current = person[0];
    let others = {};
    let bad = false;
    for (let j = 0; j < current.length; j++) {
      let comp = current[j];
      let shared = count[comp];
      shared.forEach(x => {
        if (x !== person[1]) {
          if (others[x]) {
            others[x]++;
          } else {
            others[x] = 1;
          }
          if (others[x] >= current.length) {
            bad = true;
          }
        }
      });
    }
    if (!bad) {
      result.push(person[1]);
    }
  }
  return result.sort((x, y) => x - y);
}
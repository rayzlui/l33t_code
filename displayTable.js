//From 1418 in LeetCode

/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
function displayTable(orders) {
  let tables = {};
  let count = orders.reduce((acc, curr) => {
    let table = curr[1];
    if (!tables[table]) {
      tables[table] = [table];
    }
    let food = curr[2];
    if (acc[food]) {
      if (acc[food][table]) {
        acc[food][table]++;
      } else {
        acc[food][table] = 1;
      }
    } else {
      acc[food] = {};
      acc[food][table] = 1;
    }
    return acc;
  }, {});
  let foods = Object.keys(count).sort();
  let groups = Object.keys(tables);
  foods.forEach(x => {
    groups.forEach(y => {
      if (count[x][y]) {
        tables[y].push(count[x][y].toString());
      } else {
        tables[y].push('0');
      }
    });
  });
  foods.unshift('Table');
  let result = [foods, ...Object.values(tables)];
  return result;
}

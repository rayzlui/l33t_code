//From 690 in LeetCode

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
function GetImportance(employees, id) {
  let importance = 0;
  let employee = employees.find(x => x.id === id);

  importance += employee.importance;
  let subs = employee.subordinates;
  while (subs.length > 0) {
    let moreSubs = [];
    subs.forEach(x => {
      x = employees.find(y => y.id === x);
      importance += x.importance;
      moreSubs.push(...x.subordinates);
    });

    subs = moreSubs;
  }
  return importance;
}

//faster

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
function GetImportanceII(employees, id) {
  let importance = 0;
  let database = employees.reduce((acc, curr) => {
    acc[curr.id] = [curr.importance, curr.subordinates];
    return acc;
  }, {});

  importance += database[id][0];
  let subs = database[id][1];
  while (subs.length > 0) {
    let moreSubs = [];
    subs.forEach(x => {
      let data = database[x];
      importance += data[0];
      moreSubs.push(...data[1]);
    });

    subs = moreSubs;
  }
  return importance;
}

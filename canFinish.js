//From 207 in LeetCode

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function canFinish(numCourses, prereqs) {
  //we're looking for a prereq[i] to see if it's circular === false
  let holder = {};
  let setup = prereqs.reduce((acc, curr) => {
    let course = curr[0];
    let prereq = curr[1];
    if (acc[course] === undefined) {
      acc[course] = [prereq];
    } else {
      acc[course].push(prereq);
    }
    return acc;
  }, {});

  for (let i = 0; i < prereqs.length; i++) {
    let course = prereqs[i];
    let key = course[0];
    let start = course[1];
    if (holder[key] === undefined) {
      let queue = [start];
      for (let j = 0; j < queue.length; j++) {
        holder[queue[i]] = true;
        let addPreReqs = setup[queue[j]];
        if (addPreReqs) {
          let classes = addPreReqs.filter(x => queue.includes(x));
          if (classes.length > 0) {
            if (classes[0] === queue[0]) {
              return false;
            }
          } else {
            queue.push(...addPreReqs);
          }
        }
      }
      holder[key] = true;
    }
  }
  return true;
}

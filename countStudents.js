//From 1700 in LeetCode

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
  let count = {};
  for (let i = 0; i < students.length; i++) {
    count[students[i]] = count[students[i]] + 1 || 1;
  }
  while (count[sandwiches[0]] > 0) {
    count[sandwiches[0]]--;
    sandwiches.shift();
  }
  return sandwiches.length;
}

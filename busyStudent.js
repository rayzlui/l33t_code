//From 1450 in LeetCode

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudent(startTime, endTime, queryTime) {
  let result = 0;
  for (let i = 0; i < startTime.length; i++) {
    let start = startTime[i];
    let end = endTime[i];
    if (start <= queryTime && queryTime <= end) {
      result++;
    }
  }
  return result;
}

//faster

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudentII(startTime, endTime, queryTime) {
  return startTime.reduce((acc, curr, index) => {
    if (curr <= queryTime && queryTime <= endTime[index]) {
      acc++;
    }
    return acc;
  }, 0);
}

//From 1904 in LeetCode

/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
function numberOfRounds(startTime, finishTime) {
  let start = startTime.split(':').map(x => x / 1);
  let finish = finishTime.split(':').map(x => x / 1);

  let result = 0;
  let quarters = [0, 15, 30, 45];
  let noNegs = false;
  if (start[0] === finish[0] && start[1] < finish[1]) {
    if (finish[1] - start[1] >= 15) {
      noNegs = true;
    } else {
      return 0;
    }
  }
  if (!quarters.includes(start[1])) {
    if (start[1] < 15) {
      start[1] = 15;
    } else if (start[1] < 30) {
      start[1] = 30;
    } else if (start[1] < 45) {
      start[1] = 45;
    } else {
      start[1] = 0;
      start[0] = (start[0] + 1) % 24;
    }
  }
  if (!quarters.includes(finish[1])) {
    if (finish[1] > 45) {
      finish[1] = 45;
    } else if (finish[1] > 30) {
      finish[1] = 30;
    } else if (finish[1] > 15) {
      finish[1] = 15;
    } else {
      finish[1] = 0;
    }
  }

  if (start[1] > finish[1]) {
    if (noNegs) {
      return 0;
    }
    finish[0]--;
    finish[1] += 60;
  }
  if (start[0] > finish[0]) {
    let diff = 24 - start[0];
    result += diff * 4;
    result += finish[0] * 4;
  } else {
    let diff = finish[0] - start[0];
    result += diff * 4;
  }
  result += (finish[1] - start[1]) / 15;
  return result;
}

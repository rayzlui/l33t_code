//From 1736 in LeetCode

/**
 * @param {string} time
 * @return {string}
 */
function timeMaker(time, highest) {
  if (time === '?') {
    return highest;
  } else {
    return time;
  }
}
function maximumTime(time) {
  let result = '';
  for (let i = 0; i < time.length; i++) {
    switch (i) {
      case 0:
        if (time[i] === '?') {
          if (time[i + 1] > 3) {
            result += '1';
          } else {
            result += '2';
          }
        } else {
          result += time[i];
        }
        break;
      case 1:
        if (time[i] === '?') {
          if (result[i - 1] === '2') {
            result += '3';
          } else {
            result += '9';
          }
        } else {
          result += time[i];
        }
        break;
      case 3:
        result += timeMaker(time[i], 5);
        break;
      case 4:
        result += timeMaker(time[i], 9);
        break;
      default:
        result += ':';
        break;
    }
  }
  return result;
}

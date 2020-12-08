//From 1678 in LeetCode

/**
 * @param {string} command
 * @return {string}
 */
function interpretGoal(command) {
  let result = '';
  for (let i = 0; i < command.length; i++) {
    let curr = command[i];
    if (curr === 'G') {
      result += 'G';
    } else {
      i++;
      let second = command[i];
      if (second === 'a') {
        result += 'al';
        i += 2;
      } else {
        result += 'o';
      }
    }
  }
  return result;
}

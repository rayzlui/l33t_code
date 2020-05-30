//From 874 in LeetCode

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
function robotSim(commands, obstacles) {
  let location = [0, 0];
  let betterObs =
    obstacles.length > 0
      ? obstacles.reduce((acc, curr) => {
          let string = curr.join(':');
          acc[string] = true;
          return acc;
        }, {})
      : {};
  let max = 0;
  let direction = 0;
  for (let i = 0; i < commands.length; i++) {
    let move = commands[i];
    if (move === -2) {
      direction = direction ? direction - 90 : 270;
    } else if (move === -1) {
      direction = direction === 270 ? 0 : direction + 90;
    } else {
      switch (direction) {
        case 0:
          for (let j = 0; j < move; j++) {
            location[1] = location[1] + 1;
            if (betterObs[location.join(':')]) {
              location[1] = location[1] - 1;
              break;
            }
          }
          break;
        case 90:
          for (let j = 0; j < move; j++) {
            location[0] = location[0] + 1;
            if (betterObs[location.join(':')]) {
              location[0] = location[0] - 1;
              break;
            }
          }
          break;
        case 180:
          for (let j = 0; j < move; j++) {
            location[1] = location[1] - 1;

            if (betterObs[location.join(':')]) {
              location[1] = location[1] + 1;
              break;
            }
          }
          break;
        default:
          for (let j = 0; j < move; j++) {
            location[0] = location[0] - 1;
            if (betterObs[location.join(':')]) {
              location[0] = location[0] + 1;
              break;
            }
          }
          break;
      }
    }
    max = Math.max(location.reduce((acc, curr) => curr * curr + acc, 0), max);
  }
  return max;
}

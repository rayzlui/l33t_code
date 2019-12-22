//From 838 in LeetCode

/**
 * @param {string} dominoes
 * @return {string}
 */
function pushDominoes(dominoes) {
  let last = null;
  let dots = 0;
  let result = '';
  for (let i = 0; i < dominoes.length; i++) {
    let current = dominoes[i];
    if (current === '.') {
      dots++;
    }
    if (current === 'L') {
      if (last === 'R') {
        if (dots % 2 === 0) {
          for (let j = 0; j < Math.floor(dots / 2); j++) {
            result += 'R';
          }
          for (let j = 0; j < Math.floor(dots / 2); j++) {
            result += 'L';
          }
        } else {
          for (let j = 0; j < Math.floor(dots / 2); j++) {
            result += 'R';
          }
          result += '.';
          for (let j = 0; j < Math.floor(dots / 2); j++) {
            result += 'L';
          }
        }
      } else {
        for (let j = 0; j < dots; j++) {
          result += 'L';
        }
      }
      result += 'L';
      dots = 0;
      last = 'L';
    }
    if (current === 'R') {
      if (last === null) {
        for (let j = 0; j < dots; j++) {
          result += '.';
        }
      }
      if (last === 'R') {
        for (let j = 0; j < dots; j++) {
          result += 'R';
        }
      }
      if (last === 'L') {
        for (let j = 0; j < dots; j++) {
          result += '.';
        }
      }
      result += 'R';
      dots = 0;
      last = 'R';
    }
  }

  if (last === 'R') {
    for (let j = 0; j < dots; j++) {
      result += 'R';
    }
  } else {
    for (let j = 0; j < dots; j++) {
      result += '.';
    }
  }

  return result;
}

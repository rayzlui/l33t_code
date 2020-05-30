//From 954 in LeetCode

/**
 * @param {number[]} A
 * @return {boolean}
 */
function canReorderDoubled(A) {
  let count = A.reduce(
    (acc, curr) => {
      if (curr > 0) {
        if (acc[0][curr]) {
          acc[0][curr]++;
        } else {
          acc[0][curr] = 1;
        }
      } else {
        if (acc[1][curr * -1]) {
          acc[1][curr * -1]++;
        } else {
          acc[1][curr * -1] = 1;
        }
      }
      return acc;
    },
    [{}, {}],
  );
  let negs = count[0];
  let pos = count[1];
  let keys = Object.keys(pos);
  while (keys.length > 0) {
    let current = keys[0];
    let double = (keys[0] / 1) * 2;

    if (pos[double]) {
      pos[double]--;
      pos[current]--;
      if (pos[current] < 1) {
        delete pos[current];
      }
      if (pos[double] < 1) {
        delete pos[double];
      }
      keys = Object.keys(pos);
    } else {
      return false;
    }
  }
  keys = Object.keys(negs);
  while (keys.length > 0) {
    let current = keys[0];
    let double = (keys[0] / 1) * 2;

    if (negs[double]) {
      negs[double]--;
      negs[current]--;
      if (negs[current] < 1) {
        delete negs[current];
      }
      if (negs[double] < 1) {
        delete negs[double];
      }
      keys = Object.keys(negs);
    } else {
      return false;
    }
  }
  return true;
}

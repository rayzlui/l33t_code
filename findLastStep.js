/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
function findLatestStep(arr, m) {
  if (arr.length === m) {
    return m;
  }
  let string = new Array(arr.length + 1).fill(1);
  string[0] = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let position = arr[i];
    string[position] = 0;
    let good = 0;
    for (let j = position + 1; j <= position + m; j++) {
      let curr = string[j];

      if (curr === 1) {
        good++;
      } else {
        break;
      }
    }

    if (good === m && string[position + m + 1] !== 1) {
      return i;
    }
    good = 0;
    for (let j = position - 1; j >= position - m; j--) {
      let curr = string[j];
      if (curr === 1) {
        good++;
      } else {
        break;
      }
    }
    if (good === m && string[position - m - 1] !== 1) {
      return i;
    }
  }
  return -1;
};

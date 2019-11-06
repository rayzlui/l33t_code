//From 1200

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
  let min = Infinity;
  let arrMin = [];
  arr = arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let compare = arr[i + 1];
    let lower = compare > current ? current : compare;
    let higher = compare > current ? compare : current;
    let abs = Math.abs(compare - current);
    if (abs < min) {
      min = abs;
      arrMin = [[lower, higher]];
    } else if (abs === min) {
      if (arrMin.every(x => x[0] !== lower && x[1] !== higher)) {
        arrMin.push([lower, higher]);
      }
    }
  }
  return arrMin;
};

//faster

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
  let min = Infinity;
  let arrMin = [];
  let stored = {};
  arr = arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let compare = arr[i + 1];
    let lower = compare > current ? current : compare;
    let higher = compare > current ? compare : current;
    let abs = Math.abs(compare - current);
    if (abs < min) {
      min = abs;
      arrMin = [[lower, higher]];
    } else if (abs === min) {
      if (arrMin[`${lower}${higher}`] === undefined) {
        arrMin.push([lower, higher]);
      }
      arrMin[`${lower}${higher}`];
    }
  }
  return arrMin;
};

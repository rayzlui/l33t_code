//From 1481 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findLeastNumOfUniqueInts(arr, k) {
  let holder = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let values = Object.values(holder);
  values.sort((x, y) => x - y);
  while (k > 0) {
    let current = values.shift();
    k -= current;
  }
  return k === 0 ? values.length : values.length + 1;
}

//faster

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findLeastNumOfUniqueIntsII(arr, k) {
  let holder = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  arr = arr.sort((x, y) => {
    if (holder[x] === holder[y]) {
      return x - y;
    } else {
      return holder[x] - holder[y];
    }
  });
  return new Set(arr.slice(k)).size;
}

//fasterer

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findLeastNumOfUniqueIntsIII(arr, k) {
  let holder = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let values = Object.values(holder).sort((x, y) => x - y);
  let i = 0;
  for (; i < values.length; i++) {
    if (k >= values[i]) {
      k -= values[i];
    } else {
      break;
    }
  }
  return values.length - i;
}

//From 1399 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function countLargestGroup(n) {
  let holder = [];
  for (let i = 1; i <= n; i++) {
    let sum = i
      .toString()
      .split('')
      .reduce((acc, curr) => {
        acc = acc + curr / 1;
        return acc;
      }, 0);
    if (holder[sum]) {
      holder[sum].push(i);
    } else {
      holder[sum] = [i];
    }
  }
  holder.shift();
  let size = holder.map(x => x.length);
  let max = Math.max(...size);
  let groups = holder.filter(x => x.length === max).length;
  return groups;
}

//faster

/**
 * @param {number} n
 * @return {number}
 */
function countLargestGroupII(n) {
  let holder = [];
  let size = {};
  for (let i = 1; i <= n; i++) {
    let sum = i
      .toString()
      .split('')
      .reduce((acc, curr) => {
        acc = acc + curr / 1;
        return acc;
      }, 0);
    if (holder[sum]) {
      holder[sum].push(i);
    } else {
      holder[sum] = [i];
    }
    if (size[holder[sum].length]) {
      size[holder[sum].length]++;
    } else {
      size[holder[sum].length] = 1;
    }
  }
  return size[Math.max(...Object.keys(size))];
}

//faster!!\

/**
 * @param {number} n
 * @return {number}
 */
function countLargestGroupIII(n) {
  let holder = [];
  let size = {};
  let largest = 1;
  for (let i = 1; i <= n; i++) {
    let sum = i
      .toString()
      .split('')
      .reduce((acc, curr) => {
        acc = acc + curr / 1;
        return acc;
      }, 0);
    if (holder[sum]) {
      holder[sum].push(i);
    } else {
      holder[sum] = [i];
    }
    if (size[holder[sum].length]) {
      size[holder[sum].length]++;
    } else {
      size[holder[sum].length] = 1;
    }
    largest = Math.max(holder[sum].length, largest);
  }
  return size[largest];
}

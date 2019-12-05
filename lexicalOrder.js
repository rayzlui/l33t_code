//From 386 in LeetCode

/**
 * @param {number} n
 * @return {number[]}
 */
function lexicalOrder(n) {
  if (n < 10) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }
  function recursion(value, array) {
    if (value > n) {
      return array;
    }
    for (let i = 1; i <= 10; i++) {
      array.push(value);
      array = recursion(value * 10, array);
      value++;
      if (value > n) {
        return array;
      }
    }
    return array;
  }
  let result = recursion(1, []);
  return result.slice(0, n);
}

//cleaner

/**
 * @param {number} n
 * @return {number[]}
 */
function lexicalOrderII(n) {
  if (n < 10) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }
  function recursion(value, array) {
    if (value > n) {
      return array;
    }
    for (let i = 1; i <= 10; i++) {
      array.push(value);
      array = recursion(value * 10, array);
      value++;
      if (value === 10 && i === 9) {
        return array;
      }
      if (value > n) {
        return array;
      }
    }
    return array;
  }
  let result = recursion(1, []);
  return result;
}

//From 809 in LeetCode
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
function getCount(S) {
  let order = [];
  let orderCount = [];
  let count = {};
  for (let i = 0; i < S.length; i++) {
    if (order[order.length - 1] !== S[i]) {
      orderCount.push(count);
      order.push(S[i]);
      count = {};
      count[S[i]] = 1;
    } else {
      count[S[i]]++;
    }
  }
  orderCount.push(count);
  orderCount.shift();
  return orderCount;
}
function expressiveWords(S, words) {
  //need to get the order correct.
  let count = getCount(S);
  let order = count.map(x => Object.keys(x)[0]);
  let result = words.filter(x => {
    if (x.length > S.length) {
      return false;
    }
    let xCount = getCount(x);
    let xOrder = xCount.map(x => Object.keys(x)[0]);
    if (xOrder.length !== order.length) {
      return false;
    } else {
      if (xOrder.every((x, index) => x === order[index])) {
        if (
          xCount.every((y, index) => {
            if (Object.values(y)[0] > Object.values(count[index])[0]) {
              return false;
            } else if (Object.values(count[index])[0] < 3) {
              if (Object.values(y)[0] !== Object.values(count[index])[0]) {
                return false;
              } else {
                return true;
              }
            } else {
              return true;
            }
          })
        ) {
          return true;
        }
      } else {
        return false;
      }
    }
  });
  return result.length;
}

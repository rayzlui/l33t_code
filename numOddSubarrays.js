//From 1524 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function numOfSubarrays(arr) {
  let store = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < store.length; j++) {
      store[j] += arr[i];
      if (store[j] % 2 === 1) {
        count = (count + 1) % (10 ** 9 + 7);
      }
    }
    store[i] = arr[i];
    if (arr[i] % 2 === 1) {
      count++;
    }
  }
  return count;
}

//faster

/**
 * @param {number[]} arr
 * @return {number}
 */
function numOfSubarraysII(arr) {
  let count = 0;
  let odds = 0;
  let evens = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 1) {
      count++;
      count += evens;
      let temp = evens;
      evens = odds;
      odds = temp;
      odds++;
    } else {
      count += odds;
      evens++;
    }
    count = count % (10 ** 9 + 7);
  }
  return count;
}

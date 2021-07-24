//From 1899 in LeetCode

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
function mergeTriplets(triplets, target) {
  let check = [false, false, false];
  for (let i = 0; i < triplets.length; i++) {
    let current = triplets[i];
    if (target[0] === current[0]) {
      if (target[1] >= current[1] && target[2] >= current[2]) {
        check[0] = true;
      }
    }
    if (target[1] === current[1]) {
      if (target[0] >= current[0] && target[2] >= current[2]) {
        check[1] = true;
      }
    }
    if (target[2] === current[2]) {
      if (target[1] >= current[1] && target[0] >= current[0]) {
        check[2] = true;
      }
    }
  }
  return check[0] && check[1] && check[2];
}

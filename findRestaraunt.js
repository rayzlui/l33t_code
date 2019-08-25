//From 599 in LeetCode

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(lister1, lister2) {
  let result = [100000];
  let list1 = lister1.length > lister2.length ? lister2 : lister1;
  let list2 = lister1.length > lister2.length ? lister1 : lister2;
  for (let i = 0; i < list1.length; i++) {
    let restaraunt = list1[i];
    let index2 = list2.indexOf(restaraunt);
    if (index2 !== -1) {
      let indexSum = i + index2;
      if (indexSum === result[0]) {
        result.push(restaraunt);
      } else if (indexSum < result[0]) {
        result = [indexSum, restaraunt];
      }
    }
  }
  return result.slice(1);
}

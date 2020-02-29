//From 1360 in LeetCode

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
function daysBetweenDates(date1, date2) {
  let arr1 = date1.split('-').map(x => x / 1);
  let arr2 = date2.split('-').map(x => x / 1);
  arr1[1] = arr1[1] - 1;
  arr2[1] = arr2[1] - 1;
  let dateObj1 = new Date(...arr1);
  let dateObj2 = new Date(...arr2);
  let diff = dateObj2 - dateObj1;
  return Math.abs(diff / 1000 / 60 / 60 / 24);
}

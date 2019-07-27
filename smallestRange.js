/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function smallestRangeI(arr, num) {
  let result = [];
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let average = (max + min) / 2;
  let array = [max, min];
  for (let i = 0; i < 2; i++) {
    let add = array[i] + num;
    let sub = array[i] - num;
    let addDif = average - add;
    let subDif = average - sub;

    if (Math.abs(addDif) > Math.abs(subDif)) {
      //means subdif is closer
      if (average < array[i] && average >= sub) {
        result.push(average);
      } else {
        result.push(sub);
      }
    } else {
      if (average > array[i] && average <= add) {
        result.push(average);
      } else {
        result.push(add);
      }
    }
  }
  return Math.max(...result) - Math.min(...result);
};

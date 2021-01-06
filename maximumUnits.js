//From 1710 in LeetCode

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
function maximumUnits(boxTypes, truckSize) {
  boxTypes.sort((x, y) => y[1] - x[1]);
  let result = 0;
  while (truckSize > 0 && boxTypes.length > 0) {
    let box = boxTypes.shift();
    let amountBox = box[0];
    let units = box[1];
    if (amountBox <= truckSize) {
      result += amountBox * units;
      truckSize -= amountBox;
    } else {
      result += truckSize * units;
      return result;
    }
  }
  return result;
}

//From 119 in LeetCode

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function(rowIndex) {
  let indexRow = [1];
  for (let i = 0; i < rowIndex; i++) {
    let value = indexRow[i];
    for (let j = 1; j <= i; j++) {
      let newValue = value + indexRow[j];
      value = indexRow.splice(j, 1, newValue)[0];
    }
    indexRow.push(1);
  }
  return indexRow;
};

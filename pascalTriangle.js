//From 118 in LeetCode

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  let result = [[1]];
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return result;
  }
  for (let i = 1; i <= numRows; i++) {
    let row = [1];
    let previousRow = result[i - 1];
    for (let j = 1; j < i / 2; j++) {
      let newNum = previousRow[j - 1] + previousRow[j];
      row.push(newNum);
    }
    let end = row.slice().reverse();
    if (i % 2 === 1) {
      end.splice(0, 1);
    }
    result.push(row.concat(end));
  }
  result.splice(0, 1);
  return result;
}

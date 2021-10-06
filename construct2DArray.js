//From 2022 in LeetCode

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
function construct2DArray(original, m, n) {
  if (original.length !== m * n) {
    return [];
  }
  let result = [];
  let row = [];
  for (let i = 0; i < original.length; i++) {
    let currentVal = original[i];
    row.push(currentVal);
    if (row.length === n) {
      result.push(row);
      row = [];
    }
  }

  return result;
}

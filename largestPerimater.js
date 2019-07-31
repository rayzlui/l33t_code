//From 976 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
/*
  if we sort from largest to smallest, we can end earlier if we find a suitable combination.
  for a triangle not to have area 0, the base (the longest) needs to be sorter than the two sides.
  since it's sorted largest to lowest if sorted[i] > sorted[j] + sorted[k], we should break because 
  it'll just keep getting smaller and will never be true in that loop
*/
function largestPerimeter(A) {
  let sorted = A.sort((x, y) => y - x);
  for (let i = 0; i < sorted.length - 2; i++) {
    let side1 = sorted[i];
    for (let j = i + 1; j < sorted.length - 1; j++) {
      let side2 = sorted[j];
      for (let k = j + 1; k < sorted.length; k++) {
        let side3 = sorted[k];
        if (side2 + side3 > side1) {
          return side1 + side2 + side3;
        } else {
          break;
        }
      }
      break;
    }
  }
  return 0;
};

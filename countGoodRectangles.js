//From 1725 in LeetCode

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
function countGoodRectangles(rectangles) {
  let squares = {};
  let max = 0;
  rectangles.forEach(x => {
    let min = Math.min(...x);
    squares[min] = squares[min] + 1 || 1;
    max = Math.max(max, min);
  });
  return squares[max];
}

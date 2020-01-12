//From 593 in LeetCode

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
function validSquare(p1, p2, p3, p4) {
  let coordinates = [...arguments];
  coordinates = coordinates.sort((x, y) => {
    if (x[0] === y[0]) {
      return x[1] - y[1];
    } else {
      return x[0] - y[0];
    }
  });
  let side1 =
    Math.abs(coordinates[0][0] - coordinates[1][0]) +
    Math.abs(coordinates[0][1] - coordinates[1][1]);
  let side2 =
    Math.abs(coordinates[0][0] - coordinates[2][0]) +
    Math.abs(coordinates[0][1] - coordinates[2][1]);
  let side3 =
    Math.abs(coordinates[3][0] - coordinates[1][0]) +
    Math.abs(coordinates[3][1] - coordinates[1][1]);
  let side4 =
    Math.abs(coordinates[3][0] - coordinates[2][0]) +
    Math.abs(coordinates[3][1] - coordinates[2][1]);
  let dia1 =
    Math.abs(coordinates[0][0] - coordinates[3][0]) +
    Math.abs(coordinates[0][1] - coordinates[3][1]);
  let dia2 =
    Math.abs(coordinates[2][0] - coordinates[1][0]) +
    Math.abs(coordinates[2][1] - coordinates[1][1]);
  return (
    side1 === side2 &&
    side2 === side3 &&
    side3 === side4 &&
    dia1 === dia2 &&
    side1 > 0
  );
}

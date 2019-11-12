//From 812 in LeetCode

/**
 * @param {number[][]} points
 * @return {number}
 */

function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
}
function largestTriangleArea(points) {
  //heron's formula = Math.sqrt(s(s-a)(s-b)(s-c))
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    let current = points[i];
    for (let j = i + 1; j < points.length; j++) {
      let compare1 = points[j];
      let length1 = distance(current, compare1);
      for (let k = j + 1; k < points.length; k++) {
        let compare2 = points[k];
        let length2 = distance(current, compare2);
        let length3 = distance(compare1, compare2);
        let sPerimter = (length1 + length2 + length3) / 2;
        let area = Math.sqrt(
          sPerimter *
            (sPerimter - length1) *
            (sPerimter - length2) *
            (sPerimter - length3),
        );
        if (area * 0 === 0) {
          result = Math.max(area, result);
        }
      }
    }
  }

  return result;
}

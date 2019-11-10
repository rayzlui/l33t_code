//From 447 in LeetCode

/**
 * @param {number[][]} points
 * @return {number}
 */
function numberOfBoomerangs(points) {
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    let distances = {};
    let apex = points[i];
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let outer = points[j];
        let distance =
          Math.abs(apex[0] - outer[0]) ** 2 + Math.abs(apex[1] - outer[1]) ** 2;
        if (distances[distance]) {
          distances[distance]++;
        } else {
          distances[distance] = 1;
        }
      }
    }
    for (let a in distances) {
      if (distances[a] > 1) {
        result += distances[a] * (distances[a] - 1);
      }
    }
  }

  return result;
}

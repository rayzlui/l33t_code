//From 1395 in LeetCode

/**
 * @param {number[]} rating
 * @return {number}
 */
function numTeams(rating) {
  let count = 0;
  let pointA = 0;
  let pointB = 1;
  let pointC = 2;
  while (pointA < rating.length - 2) {
    if (rating[pointA] < rating[pointB] && rating[pointB] < rating[pointC]) {
      count++;
    }
    if (rating[pointA] > rating[pointB] && rating[pointB] > rating[pointC]) {
      count++;
    }
    pointC++;
    if (pointC >= rating.length) {
      pointB++;
      pointC = pointB + 1;
      if (pointB >= rating.length - 1) {
        pointA++;
        pointB = pointA + 1;
        pointC = pointB + 1;
      }
    }
  }
  return count;
}

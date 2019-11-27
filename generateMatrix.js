//From 59 in LeetCode

/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  let matrix = new Array(n).fill('').map(x => new Array(n).fill(''));
  let moves = (n - 1) * 2 + 1;
  let hits = n;
  let currentValue = 1;
  let currentSpot = [0, 0];
  let down = true;
  for (let i = 0; i < moves; i++) {
    if (i % 4 === 0) {
      for (let j = 0; j < hits; j++) {
        matrix[currentSpot[0]][currentSpot[1]] = currentValue;
        currentSpot[1]++;
        currentValue++;
      }
      currentSpot[1]--;
      currentSpot[0]++;
      hits--;
    }
    if (i % 4 === 1) {
      for (let j = 0; j < hits; j++) {
        matrix[currentSpot[0]][currentSpot[1]] = currentValue;
        currentValue++;
        currentSpot[0]++;
      }
      currentSpot[0]--;
      currentSpot[1]--;
    }
    if (i % 4 === 2) {
      for (let j = 0; j < hits; j++) {
        console.log(currentSpot);
        matrix[currentSpot[0]][currentSpot[1]] = currentValue;
        currentValue++;
        currentSpot[1]--;
      }
      hits--;
      currentSpot[1]++;
      currentSpot[0]--;
    }
    if (i % 4 === 3) {
      for (let j = 0; j < hits; j++) {
        matrix[currentSpot[0]][currentSpot[1]] = currentValue;
        currentValue++;
        currentSpot[0]--;
      }
      currentSpot[0]++;
      currentSpot[1]++;
    }
  }
  return matrix;
}

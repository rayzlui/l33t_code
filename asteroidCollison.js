//From 735 in LeetCode

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  for (let i = 0; i < asteroids.length; i++) {
    let current = asteroids[i];
    if (current < 0) {
      let previous = i - 1;
      if (previous >= 0) {
        while (asteroids[previous] > 0) {
          let oldAst = Math.abs(asteroids[previous]);
          if (oldAst > Math.abs(current)) {
            asteroids.splice(previous + 1, 1);
            previous--;
            break;
          } else if (oldAst === Math.abs(current)) {
            asteroids.splice(previous, 2);
            previous -= 2;
            break;
          } else {
            asteroids.splice(previous, 1);
            previous--;
          }
        }
        i = previous + 1;
      }
    }
  }
  return asteroids;
}

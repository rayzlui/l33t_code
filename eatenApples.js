//From 1705 in LeetCode

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
function eatenApples(apples, days) {
  //totalApples - (bad - eaten) === currentApples
  let applesBad = {};
  let result = 0;
  let totalApples = 0;
  let i = 0;
  let eaten = 0;
  let badApples = 0;
  for (; i < apples.length; i++) {
    let expiredDay = days[i];
    if (apples[i] > 0) {
      applesBad[expiredDay + i] =
        applesBad[expiredDay + i] + apples[i] || apples[i];
      totalApples += apples[i];
    }
    if (applesBad[i]) {
      badApples += applesBad[i] - eaten;
      eaten = 0;
    }
    if (totalApples - badApples > 0) {
      result++;
      eaten++;
      totalApples--;
    }
  }

  while (totalApples - badApples > 0) {
    if (applesBad[i]) {
      badApples += applesBad[i] - eaten;
      eaten = 0;
    }
    if (totalApples - badApples <= 0) {
      return result;
    }

    result++;
    i++;
    eaten++;
    totalApples--;
  }
  return result;
}

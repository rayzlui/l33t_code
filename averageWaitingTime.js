//From 1701 in LeetCode

/**
 * @param {number[][]} customers
 * @return {number}
 */
function averageWaitingTime(customers) {
  let sumTime = customers[0][1];
  let currTime = customers[0][0] + customers[0][1];
  for (let i = 1; i < customers.length; i++) {
    let arriveTime = customers[i][0];
    let cookTime = Math.max(currTime, arriveTime) + customers[i][1];
    let waitTime = cookTime - arriveTime;
    sumTime += waitTime;
    currTime = cookTime;
  }
  return sumTime / customers.length;
}

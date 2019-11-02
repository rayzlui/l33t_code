//From 1094 in LeetCode

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, full) {
  let capacity = 0;
  let destination = [];
  trips = trips.sort((x, y) => {
    if (x[1] === y[1]) {
      return x[2] - y[2];
    } else {
      return x[1] - y[1];
    }
  });
  for (let i = 0; i < trips.length; i++) {
    let trip = trips[i];
    let passengers = trip[0];
    let pickup = trip[1];
    let end = trip[2];
    for (let i = 0; i < destination.length; i++) {
      let x = destination[i];
      if (pickup >= x[1]) {
        capacity -= x[0];
        destination.splice(i, 1);
        i--;
      }
    }

    capacity += passengers;
    if (capacity > full) {
      return false;
    }
    destination.push([passengers, end]);
  }
  return true;
}

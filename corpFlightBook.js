//From 1109 in LeetCode

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
function corpFlightBookings(bookings, n) {
  let holder = {};
  for (let i = 1; i <= n; i++) {
    holder[i] = 0;
  }
  for (let i = 0; i < bookings.length; i++) {
    let a = bookings[i][0];
    let b = bookings[i][1];
    let seats = bookings[i][2];
    for (let j = a; j <= b; j++) {
      holder[j] += seats;
    }
  }
  return Object.values(holder);
}

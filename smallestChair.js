//From 1942 in LeetCode

/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */

function merge(x, y) {
  let result = [];
  while (x.length > 0 && y.length > 0) {
    if (x[0] < y[0]) {
      result.push(x.shift());
    } else {
      result.push(y.shift());
    }
  }
  if (x.length > 0) {
    result = result.concat(x);
  } else {
    result = result.concat(y);
  }
  return result;
}
function smallestChair(times, targetFriend) {
  let targetTime = times[targetFriend][0];
  let queueChairs = [];
  //queueChairs will track free seats
  let occupiedChairs = {};
  //end will track the seat to index
  let lowestTime = Infinity;
  let intervals = times.reduce(
    (acc, curr, index) => {
      let startTime = curr[0];
      let endTime = curr[1];
      lowestTime = Math.min(startTime, lowestTime);
      if (startTime <= targetTime) {
        acc[startTime][0] = index;
        if (endTime <= targetTime) {
          acc[endTime][1].push(index);
        }
      }
      return acc;
    },
    new Array(targetTime + 1).fill(0).map(x => {
      let arr = new Array(2);
      arr[0] = null;
      arr[1] = new Array();
      return arr;
    }),
  );
  let highSeat = 0;
  for (let i = lowestTime; i <= targetTime; i++) {
    let currentTime = intervals[i];
    let incomingFriend = currentTime[0];
    let outgoingFriends = currentTime[1];
    if (incomingFriend !== null || outgoingFriends.length > 0) {
      if (outgoingFriends.length > 0) {
        let openSeats = outgoingFriends.map(x => {
          let remove = occupiedChairs[x];
          delete occupiedChairs[x];
          return remove;
        });
        openSeats.sort((x, y) => x - y);
        queueChairs = merge(queueChairs, openSeats);
      }
      if (incomingFriend !== null) {
        if (queueChairs.length > 0) {
          let open = queueChairs.shift();
          occupiedChairs[incomingFriend] = open;
        } else {
          occupiedChairs[incomingFriend] = highSeat;
          highSeat++;
        }
      }
    }
  }
  return occupiedChairs[targetFriend];
}

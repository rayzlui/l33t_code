//From 841 in LeetCode

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
  let visitedRooms = {};
  let queueRooms = [0];
  for (let i = 0; i < queueRooms.length; i++) {
    let visiting = queueRooms[i];
    visitedRooms[visiting] = true;
    let roomKeys = rooms[visiting];
    roomKeys = roomKeys.filter(x => visitedRooms[x] !== true);
    queueRooms = queueRooms.concat(roomKeys);
  }
  return Object.keys(visitedRooms).length === rooms.length;
}

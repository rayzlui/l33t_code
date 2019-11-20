//From 1222 in LeetCode

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */

function getLeft(spot) {
  let left = [];
  for (let i = spot[1] - 1; i >= 0; i--) {
    let newSpot = spot.slice();
    newSpot[1] = i;
    left.push(newSpot);
  }
  return left;
}
function getRight(spot) {
  let right = [];
  for (let i = spot[1] + 1; i < 8; i++) {
    let newSpot = spot.slice();
    newSpot[1] = i;
    right.push(newSpot);
  }
  return right;
}
function getUp(spot) {
  let up = [];
  for (let i = spot[0] - 1; i >= 0; i--) {
    let newSpot = spot.slice();
    newSpot[0] = i;
    up.push(newSpot);
  }
  return up;
}
function getDown(spot) {
  let down = [];
  for (let i = spot[0] + 1; i < 8; i++) {
    let newSpot = spot.slice();
    newSpot[0] = i;
    down.push(newSpot);
  }
  return down;
}
function getUpLeft(coor) {
  let spot = coor.slice();
  let upLeft = [];
  let lower = spot[0] > spot[1] ? spot[1] : spot[0];
  for (let i = 0; i < lower; i++) {
    spot = spot.map(x => x - 1);
    upLeft.push(spot);
  }
  return upLeft;
}
function getDownRight(coor) {
  let spot = coor.slice();
  let downRight = [];
  let higher = spot[0] > spot[1] ? spot[0] : spot[1];
  for (let i = higher; i < 8; i++) {
    spot = spot.map(x => x + 1);
    downRight.push(spot);
  }
  return downRight;
}

function getDownLeft(coor) {
  let spot = coor.slice();
  let downLeft = [];
  let end = 8 - spot[0] > spot[1] ? spot[1] : 8 - spot[0];
  for (let i = 0; i < end; i++) {
    spot = [spot[0] + 1, spot[1] - 1];
    downLeft.push(spot);
  }
  return downLeft;
}
function getUpRight(coor) {
  let spot = coor.slice();
  let upRight = [];
  let end = spot[0] > 8 - spot[1] ? 8 - spot[1] : spot[0];
  for (let i = 0; i < end; i++) {
    spot = [spot[0] - 1, spot[1] + 1];
    upRight.push(spot);
  }
  return upRight;
}
function queensAttacktheKing(queens, king) {
  let holder = queens.reduce((acc, curr) => {
    acc[`${curr[0]}${curr[1]}`] = true;
    return acc;
  }, {});
  let result = [
    getLeft(king).find(x => holder[`${x[0]}${x[1]}`]),
    getRight(king).find(x => holder[`${x[0]}${x[1]}`]),
    getUp(king).find(x => holder[`${x[0]}${x[1]}`]),
    getDown(king).find(x => holder[`${x[0]}${x[1]}`]),
    getUpLeft(king).find(x => holder[`${x[0]}${x[1]}`]),
    getDownRight(king).find(x => holder[`${x[0]}${x[1]}`]),
    getDownLeft(king).find(x => holder[`${x[0]}${x[1]}`]),
    getUpRight(king).find(x => holder[`${x[0]}${x[1]}`]),
  ];

  return result.filter(x => x !== undefined);
}

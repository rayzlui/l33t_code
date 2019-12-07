//From 1275 in LeetCode

/**
 * @param {number[][]} moves
 * @return {string}
 */
function winningMove(array) {
  let winningDiagonals1 = [];
  let winningDiagonals2 = [];
  let vertical = {};
  let horizontal = {};
  for (let i = 0; i < array.length; i++) {
    let move = array[i];
    let vert = move[0];
    let horz = move[1];
    if (horz === 1 && vert === 1) {
      winningDiagonals1.push(1);
      winningDiagonals2.push(1);
      if (winningDiagonals1.length === 3) {
        return true;
      }
      if (winningDiagonals2.length === 3) {
        return true;
      }
    }
    if ((horz === 2 && vert === 0) || (horz === 0 && vert === 2)) {
      winningDiagonals1.push(1);
      if (winningDiagonals1.length === 3) {
        return true;
      }
    }
    if ((horz === 0 && vert === 0) || (horz === 2 && vert === 2)) {
      winningDiagonals2.push(1);
      if (winningDiagonals2.length === 3) {
        return true;
      }
    }
    if (vertical[vert]) {
      vertical[vert]++;
      if (vertical[vert] === 3) {
        return true;
      }
    } else {
      vertical[vert] = 1;
    }
    if (horizontal[horz]) {
      horizontal[horz]++;
      if (horizontal[horz] === 3) {
        return true;
      }
    } else {
      horizontal[horz] = 1;
    }
  }
  return false;
}
var tictactoe = function(moves) {
  let A = [];
  let B = [];
  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      A.push(moves[i]);
      if (winningMove(A)) {
        return 'A';
      }
    } else {
      B.push(moves[i]);
      if (winningMove(B)) {
        return 'B';
      }
    }
  }
  if (moves.length === 9) {
    return 'Draw';
  } else {
    return 'Pending';
  }
};

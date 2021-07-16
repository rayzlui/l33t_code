//From 1927 in LeetCode

/**
 * @param {string} num
 * @return {boolean}
 */

function sumGame(num) {
  let alice = 0;
  let bob = 0;
  let alicePlace = 0;
  let bobPlace = 0;
  for (let i = 0; i < num.length; i++) {
    let current = num[i];
    if (i >= num.length / 2) {
      if (current === '?') {
        bobPlace++;
      } else {
        bob += current / 1;
      }
    } else {
      if (current === '?') {
        alicePlace++;
      } else {
        alice += current / 1;
      }
    }
  }
  if (alicePlace === bobPlace) {
    return alice !== bob;
  } else if (alicePlace > bobPlace) {
    let extraAlice = alicePlace - bobPlace;
    if (extraAlice % 2 === 0) {
      return alice + (extraAlice / 2) * 9 !== bob;
    } else {
      let totalMoves = Math.floor(extraAlice / 2);
      let potentialOne = totalMoves * 9 + alice;
      let potentialTwo = (totalMoves + 1) * 9 + alice;
      return potentialOne !== bob || potentialTwo !== bob;
    }
  } else {
    let extraBob = bobPlace - alicePlace;
    if (extraBob % 2 === 0) {
      return bob + (extraBob / 2) * 9 !== alice;
    } else {
      let totalMoves = Math.floor(extraBob / 2);
      let potentialOne = totalMoves * 9 + bob;
      let potentialTwo = (totalMoves + 1) * 9 + bob;
      return potentialOne !== alice || potentialTwo !== alice;
    }
  }
}

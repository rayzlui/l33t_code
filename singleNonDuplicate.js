//From 540 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(array) {
  if (array.length === 1) {
    return array[0];
  }
  let middle = Math.floor(array.length / 2);
  let halfOne = array.splice(0, middle);
  let endOne = halfOne[halfOne.length - 1];
  let startOne = array[0];
  let chosenOne;
  if (endOne === startOne) {
    halfOne.pop();
    array.shift();
    chosenOne = halfOne.length % 2 === 1 ? halfOne : array;
  } else {
    if (halfOne[halfOne.length - 2] !== endOne) {
      return endOne;
    }
    if (startOne !== array[1]) {
      return startOne;
    }
    chosenOne = halfOne.length % 2 === 1 ? halfOne : array;
  }

  for (let i = 0; i < chosenOne.length; i += 2) {
    if (chosenOne[i] !== chosenOne[i + 1]) {
      return chosenOne[i];
    }
  }
};

//recursion

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(array) {
  //go to half way point, determine if each side is equal, if it is, we put each half in recursion, if its not, we check if the one to the left/right of it is. if its not, then it's our single number.
  //one will be odd, one will be even. if the split point they're equal, we go with the even side. if they aren't equal, we go with the odd side.
  if (array.length === 1) {
    return array[0];
  }
  let middle = Math.floor(array.length / 2);
  let halfOne = array.splice(0, middle);
  let endOne = halfOne[halfOne.length - 1];
  let startOne = array[0];
  let chosenOne;
  if (endOne === startOne) {
    halfOne.pop();
    array.shift();
    chosenOne = halfOne.length % 2 === 1 ? halfOne : array;
  } else {
    if (halfOne[halfOne.length - 2] !== endOne) {
      return endOne;
    }
    if (startOne !== array[1]) {
      return startOne;
    }
    chosenOne = halfOne.length % 2 === 1 ? halfOne : array;
  }
  let answer = singleNonDuplicate(chosenOne);
  return answer;
};

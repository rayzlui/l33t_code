//From 946 in LeetCode

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
  let mockPush = [];
  let poppedCounter = 0;
  for (let i = 0; i < pushed.length; i++) {
    mockPush.push(pushed[i]);
    if (pushed[i] === popped[poppedCounter]) {
      mockPush.pop();
      poppedCounter++;
      for (let j = mockPush.length; j >= 0; j--) {
        if (mockPush[j] === popped[poppedCounter]) {
          mockPush.pop();
          poppedCounter++;
        }
      }
    }
  }
  if (mockPush.length > 0) {
    return false;
  } else {
    return true;
  }
}

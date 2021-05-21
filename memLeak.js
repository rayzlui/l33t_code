//From 1860 in LeetCode

/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
function memLeak(memory1, memory2) {
  let time = 1;
  while (memory1 >= 0 && memory2 >= 0) {
    if (memory1 >= memory2) {
      if (memory1 >= time) {
        memory1 -= time;
      } else {
        return [time, memory1, memory2];
      }
    } else {
      if (memory2 >= time) {
        memory2 -= time;
      } else {
        return [time, memory1, memory2];
      }
    }
    time++;
  }
}

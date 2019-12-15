//From 1024 in LeetCode

/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
function videoStitching(clips, T) {
  let count = 1;

  clips = clips.sort((x, y) => x[0] - y[0]);
  let largest = clips[0];
  let start = largest[0];
  if (start !== 0) {
    return -1;
  }
  for (let i = 0; i < clips.length; i++) {
    let current = clips[i];
    if (current[0] <= start) {
      largest = current[1] > largest[1] ? current : largest;
    } else {
      if (current[0] > largest[1]) {
        return -1;
      }
      count++;
      start = largest[1];
      largest = current;
      i--;
    }
    if (largest[1] >= T) {
      return count;
    }
  }

  return -1;
}

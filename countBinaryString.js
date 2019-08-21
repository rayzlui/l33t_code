//From 696 in leetcode

/**
 * @param {string} s
 * @return {number}
 */
function countBinarySubstrings(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let zeroCounter = 0;
    let oneCounter = 0;
    let currentHead = s[i] / 1;
    if (currentHead === 0) {
      zeroCounter++;
    } else {
      oneCounter++;
    }

    for (let j = i + 1; j < s.length; j++) {
      let currentTail = s[j] / 1;
      if (currentTail === 0) {
        zeroCounter++;
        if (zeroCounter === oneCounter) {
          i = i + oneCounter - 1;
          result++;
          break;
        }
        if (oneCounter > 0) {
          if (zeroCounter > oneCounter) {
            i = j - oneCounter - 1;
            break;
          } else {
            result++;
            if (j === s.length - 1) {
              i = j;
            }
          }
        }
      } else {
        oneCounter++;
        if (zeroCounter === oneCounter) {
          result++;
          i = i + zeroCounter - 1;
          break;
        }
        if (zeroCounter > 0) {
          if (oneCounter > zeroCounter) {
            i = j - zeroCounter - 1;

            break;
          } else {
            result++;
            if (j === s.length - 1) {
              i = j;
            }
          }
        }
      }
    }
  }
  return result;
}

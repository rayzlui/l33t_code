//From 1071 in LeetCode

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  let output = '';
  let length1 = str1.length;
  let length2 = str2.length;
  for (let i = 0; i < length2 - 1; i++) {
    let portionLength = length2 - i;
    if (length2 % portionLength === 0 && length1 % portionLength === 0) {
      //if we can divide the string into equal portions
      let portion = str2.slice(0, portionLength);
      let failed = false;
      for (let j = 0; j < length2 / portionLength - 1; j++) {
        if (str2.substr((j + 1) * portionLength, portionLength) !== portion) {
          failed = true;
          break;
        }
      }
      for (let k = 0; k < length1 / portionLength; k++) {
        if (str1.substr(k * portionLength, portionLength) !== portion) {
          failed = true;
          break;
        }
      }
      if (!failed) {
        return portion;
      }
    }
  }
  return output;
}

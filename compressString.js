//From 443 in LeetCode

/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  let counter = 0;
  let start;
  if (chars.length === 1) {
    return chars.length;
  }
  if (chars.length === 0) {
    return chars.length;
  }

  for (let i = 0; i < chars.length; i++) {
    let current = chars[i];
    if (start === undefined) {
      start = current;
    }
    if (current === start) {
      counter++;
      if (i === chars.length - 1) {
        if (counter !== 1) {
          chars.splice(
            i - counter + 2,
            counter - 1,
            ...counter.toString().split(''),
          );
        }

        return chars.length;
      }
    } else {
      if (counter !== 1) {
        chars.splice(
          i - counter + 1,
          counter - 1,
          ...counter.toString().split(''),
        );
        i -= counter - 1;
      } else {
        i--;
      }

      start = undefined;
      counter = 0;
    }
  }
}

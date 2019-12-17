//From 1156 in LeetCode

/**
 * @param {string} text
 * @return {number}
 */
function check(text) {
  let largest = [0, 0];
  let current = [text[0], 1];
  let previous = [null, null];
  let prePrevious = [null, null];
  for (let i = 1; i < text.length; i++) {
    let letter = text[i];
    if (letter === current[0]) {
      current[1]++;
    } else {
      let holdsCurrent = current;

      if (current[0] === prePrevious[0] && previous[1] === 1) {
        holdsCurrent = [current[0], current[1] + prePrevious[1]];
      }
      if (letter === largest[0] && largest[2] && prePrevious[0] !== null) {
        largest[1]++;
        largest[2] = false;
      }
      prePrevious = previous;
      previous = current;
      largest =
        holdsCurrent[1] >= largest[1] ? [...holdsCurrent, true] : largest;
      current = [letter, 1];
    }
  }
  if (prePrevious[0] === current[0] && previous[1] === 1) {
    return Math.max(largest[1], prePrevious[1] + current[1]);
  }
  if (current[0] === largest[0] && largest[2]) {
    largest[1]++;
  }

  return Math.max(largest[1], current[1]);
}
function maxRepOpt1(text) {
  let reverse = text.split('').reverse();
  return Math.max(check(text), check(reverse));
};

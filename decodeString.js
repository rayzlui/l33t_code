//From 394 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  //use stack to hold the multipliers, once a bracket is closed, we apply the last in the stack to the string, then when openBracket = 0, we apply that to full result.
  let result = '';
  let multipliers = [];
  let storedStrings = [];
  let openBrackets = 0;
  let currentString = '';
  let currentMultiplier = '';
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current === '[') {
      if (openBrackets >= 1) {
        storedStrings.push(currentString);
        currentString = '';
      }
      openBrackets++;
      multipliers.push(currentMultiplier);
      currentMultiplier = '';
    } else if (current === ']') {
      openBrackets--;

      let lastMultiplier = multipliers.pop() / 1;
      let nextString = '';
      for (let j = 0; j < lastMultiplier; j++) {
        nextString += currentString;
      }
      if (openBrackets > 0) {
        let lastStored = storedStrings.pop();
        nextString = lastStored + nextString;
      }
      currentString = nextString;
      if (openBrackets === 0) {
        result += currentString;
        currentString = '';
      }
    } else if (current * 0 === 0) {
      currentMultiplier += current;
    } else {
      if (multipliers.length === 0) {
        result += current;
      } else {
        currentString += current;
      }
    }
  }
  result += currentString;
  return result;
}

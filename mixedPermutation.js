//From 784 in LeetCode

/**
 * @param {string} S
 * @return {string[]}
 */
function letterCasePermutation(string) {
  let array = string.split('');
  let result = [];
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function recursion(source, current) {
    if (current.length === string.length) {
      let string = current.join('');
      if (!result.includes(string)) {
        result.push(string);
      }
      return;
    }
    for (let i = 0; i < source.length; i++) {
      //not capitalized
      let letter = source[i];
      let newCurrent = current.slice();

      newCurrent.push(letter);
      recursion(source.slice(i + 1), newCurrent);
      newCurrent.pop();
      let switched =
        letter === letter.toLowerCase()
          ? letter.toUpperCase()
          : letter.toLowerCase();

      newCurrent.push(switched);
      recursion(source.slice(i + 1), newCurrent);
    }
  }
  recursion(array, []);
  return result;
};

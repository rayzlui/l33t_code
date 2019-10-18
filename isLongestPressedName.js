//From 925 in LeetCode

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
function isLongPressedName(name, typed) {
  let type = typed.split('').reverse();
  for (let i = name.length - 1; i >= 0; i--) {
    let index = type.indexOf(name[i]);
    if (index === -1) {
      return false;
    } else {
      type = type.splice(index + 1);
    }
  }
  return true;
}

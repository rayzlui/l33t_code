//From 1233 in LeetCode

/**
 * @param {string[]} folder
 * @return {string[]}
 */
function removeSubfolders(folder) {
  let split = folder
    .map(x => {
      let s = x.split('/');
      s.shift();
      return s;
    })
    .sort((x, y) => x.length - y.length);
  let holder = {};
  for (let i = 0; i < split.length; i++) {
    let file = split[i];
    let search = '';
    let found = false;
    for (let j = 0; j < file.length; j++) {
      search += '/' + file[j];
      if (holder[search]) {
        found = true;
        break;
      }
    }
    if (!found) {
      holder[search] = true;
    }
  }
  return Object.keys(holder);
}

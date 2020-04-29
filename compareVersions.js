//From 165 in LeetCode

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
  version1 = version1.split('.').map(x => x / 1);
  version2 = version2.split('.').map(x => x / 1);
  let longer = version1.length > version2.length ? version1 : version2;
  for (let i = 0; i < longer.length; i++) {
    let ver1 = version1[i];
    let ver2 = version2[i];
    if (ver1 > ver2) {
      return 1;
    } else if (ver2 > ver1) {
      return -1;
    }
    if (ver1 === undefined && ver2) {
      return -1;
    }
    if (ver2 === undefined && ver1) {
      return 1;
    }
  }
  return 0;
}

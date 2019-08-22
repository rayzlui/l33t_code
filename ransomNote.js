//From 383 in LeetCode

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  let mag = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    let currentLetter = ransomNote[i];
    if (!mag.includes(currentLetter)) {
      return false;
    }
    mag.splice(mag.indexOf(currentLetter), 1);
  }
  return true;
}

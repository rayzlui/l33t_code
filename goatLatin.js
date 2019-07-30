//From 824 in LeetCode

/**
 * @param {string} S
 * @return {string}
 */
function toGoatLatin(S) {
  let result = [];
  let arrayS = S.split(' ');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < arrayS.length; i++) {
    let word = arrayS[i];
    if (!vowels.includes(word[0].toLowerCase())) {
      word = word + word[0];
      word = word.substr(1);
    }
    word = word + 'ma' + 'a'.repeat(i + 1);
    result.push(word);
  }
  return result.join(' ');
}

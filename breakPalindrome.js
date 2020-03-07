//From 1328 in LeetCode

/**
 * @param {string} palindrome
 * @return {string}
 */
function breakPalindrome(palindrome) {
  if (palindrome.length === 1) {
    return '';
  }
  palindrome = palindrome.split('');
  for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i] !== 'a') {
      if (
        palindrome.length % 2 === 1 &&
        i === Math.floor(palindrome.length / 2)
      ) {
        if (palindrome[i - 1] !== 'a' || palindrome[i + 1] !== 'a') {
          palindrome[i] = 'a';
          return palindrome.join('');
        }
      } else {
        palindrome[i] = 'a';
        return palindrome.join('');
      }
    }
  }
  palindrome[palindrome.length - 1] = 'b';
  return palindrome.join('');
}

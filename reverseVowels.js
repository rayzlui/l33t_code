//From 345 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function(s) {
  let vowels = { a: true, e: true, i: true, o: true, u: true };
  let arr = s.split('');
  let vowelLocations = arr
    .reduce((acc, curr) => {
      if (vowels[curr.toLowerCase()]) {
        acc.push(curr);
      }
      return acc;
    }, [])
    .reverse();

  for (let i = 0; i < arr.length; i++) {
    if (vowels[arr[i].toLowerCase()]) {
      arr[i] = vowelLocations[0];
      vowelLocations.splice(0, 1);
    }
  }
  return arr.join('');
};

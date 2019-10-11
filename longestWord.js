//From 720 in LeetCode

/**
 * @param {string[]} words
 * @return {string}
 */
let longestWord = function(words) {
  let holder = {};
  let longest;
  let sorted = words.sort((x, y) => x.length - y.length);
  for (let i = 0; i < sorted.length; i++) {
    let word = sorted[i];
    if (word.length === 1) {
      holder[word] = true;
      longest = word.localeCompare(longest) === -1 ? word : longest;
    } else {
      let build = true;
      for (let i = 0; i < word.length - 1; i++) {
        let letter = word.substring(0, i + 1);
        if (!holder[letter]) {
          build = false;
          break;
        }
      }
      if (build) {
        holder[word] = true;
        if (longest === undefined) {
          longest = word;
        } else {
          if (word.length === longest.length) {
            let compare = word.localeCompare(longest);
            if (compare === -1) {
              longest = word;
            }
          } else {
            longest = word.length > longest.length ? word : longest;
          }
        }
      }
    }
  }
  return longest;
};

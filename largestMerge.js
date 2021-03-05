//From 1754 in LeetCode

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
/*ju ju
    juju > ju
    jujjuj > jujj
*/

function largestMerge(word1, word2) {
  let merge = '';
  let subWord1 = '';
  let subWord2 = '';
  let i = 0;
  let j = 0;
  let retainer = '';
  for (; i < word1.length && j < word2.length; ) {
    let letter1 = word1[i];
    let letter2 = word2[j];

    if (retainer) {
      while (subWord1.length < retainer.length) {
        subWord1 += letter1;
        subWord2 += letter2;
        i++;
        j++;
        letter1 = word1[i];
        letter2 = word2[j];
      }
      while (subWord1 === subWord2 && (i < word1.length || j < word2.length)) {
        subWord1 += letter1 || '';
        subWord2 += letter2 || '';
        if (letter1) {
          i++;
        }
        if (letter2) {
          j++;
        }
        letter1 = word1[i];
        letter2 = word2[j];
      }

      if (subWord1 > subWord2) {
        if (subWord1 < retainer) {
          merge += retainer;
        } else {
          j -= retainer.length;
        }

        i -= subWord1.length;
        j -= subWord2.length;
      } else {
        if (subWord2 < retainer) {
          merge += retainer;
        } else {
          i -= retainer.length;
        }
        i -= subWord1.length;
        j -= subWord2.length;
      }
      retainer = '';
      subWord1 = '';
      subWord2 = '';
    } else {
      if (letter1 === letter2) {
        if (subWord1[0] > letter1) {
          merge += subWord1 + subWord2;
          subWord1 = letter1;
          subWord2 = letter2;
        } else if (subWord1[0] === letter1) {
          merge += subWord1;
          retainer = subWord2;
          subWord1 = letter1;
          subWord2 = letter2;
        } else {
          subWord1 += letter1;
          subWord2 += letter2;
        }

        i++;
        j++;
      } else {
        if (letter1 > letter2) {
          merge += subWord1;
          if (letter1 > subWord2[0] || !subWord2) {
            merge += letter1;
            i++;
          }
          subWord1 = '';

          j -= subWord2.length;
          subWord2 = '';
        } else {
          merge += subWord2;
          if (letter2 > subWord1[0] || !subWord1) {
            merge += letter2;
            j++;
          }
          subWord2 = '';
          i -= subWord1.length;
          subWord1 = '';
        }
        retainer = '';
      }
    }
  }
  if (i === word1.length) {
    merge += subWord2;
    let lastSub = subWord1[subWord1.length - 1];
    if (lastSub) {
      let letter = word2[j];
      let endStuff = '';
      while (letter >= lastSub && j < word2.length) {
        endStuff += letter;
        j++;
        letter = word2[j];
      }
      if (endStuff > retainer) {
        merge += endStuff + retainer;
      } else {
        merge += retainer + endStuff;
      }
      merge += subWord1 + word2.substring(j);
    } else {
      merge +=
        retainer > word2.substring(j)
          ? retainer + word2.substring(j)
          : word2.substring(j) + retainer;
    }
  } else if (j === word2.length) {
    merge += subWord1;
    let lastSub = subWord2[subWord2.length - 1];
    let letter = word1[i];
    if (lastSub) {
      let endStuff = '';
      while (letter >= lastSub && i < word1.length) {
        endStuff += letter;
        i++;
        letter = word1[i];
      }
      if (endStuff > retainer) {
        merge += endStuff + retainer;
      } else {
        merge += retainer + endStuff;
      }
      merge += subWord2 + word1.substr(i);
    } else {
      merge +=
        retainer > word1.substr(i)
          ? retainer + word1.substr(i)
          : word1.substr(i) + retainer;
    }
  }
  return merge;
}

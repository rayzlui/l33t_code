//From 804 in LeetCode

/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
  const morseCode = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };
  function checkWord(acc, current) {
    let code = '';
    for (let a of current) {
      code += morseCode[a];
    }
    if (!acc.includes(code)) {
      acc.push(code);
    }
    return acc;
  }

  return words.reduce(checkWord, []).length;
};

//From 806 in LeetCode

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
function numberOfLines(widths, S) {
  const alphabetValue = {
    a: widths[0],
    b: widths[1],
    c: widths[2],
    d: widths[3],
    e: widths[4],
    f: widths[5],
    g: widths[6],
    h: widths[7],
    i: widths[8],
    j: widths[9],
    k: widths[10],
    l: widths[11],
    m: widths[12],
    n: widths[13],
    o: widths[14],
    p: widths[15],
    q: widths[16],
    r: widths[17],
    s: widths[18],
    t: widths[19],
    u: widths[20],
    v: widths[21],
    w: widths[22],
    x: widths[23],
    y: widths[24],
    z: widths[25],
  };
  let lines = 0;
  let linevalue = 0;
  for (let i = 0; i < S.length; i++) {
    let charValue = alphabetValue[S[i]];
    if (linevalue + charValue > 100) {
      lines++;
      linevalue = 0;
      i -= 1;
    } else {
      linevalue += charValue;
    }
  }
  return [lines + 1, linevalue];
};

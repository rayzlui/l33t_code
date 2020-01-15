//From 1054 in LeetCode

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
function rearrangeBarcodes(barcodes) {
  if (barcodes.length === 1) {
    return barcodes;
  }
  let count = barcodes.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let keys = Object.keys(count).reduce(
    (acc, curr) => {
      if (count[curr] > 1) {
        acc[0].push(curr);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },
    [[], []],
  );
  let result = [];
  let multiples = keys[0];
  let singles = keys[1];
  multiples = multiples.sort((x, y) => count[y] - count[x]);
  while (count[multiples[0]]) {
    result.push(multiples[0]);
    if (count[multiples[1]] > 0) {
      result.push(multiples[1]);
      count[multiples[1]]--;
    } else {
      if (singles[0]) {
        result.push(singles[0]);
        singles.shift();
      }
    }
    count[multiples[0]]--;
    multiples = multiples.sort((x, y) => count[y] - count[x]);
  }
  return result.concat(singles);
}

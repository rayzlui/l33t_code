//From 832 of LeetCode

/**
 * @param {number[][]} A
 * @return {number[][]}
 */

function flipAndInvertImage(array) {
  return array.reduce((result, current) => {
    result.push(current.reverse().map(x => (x == 0 ? 1 : 0)));
    return result;
  }, []);
};

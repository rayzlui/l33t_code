//From 1491 in LeetCode

/**
 * @param {number[]} salary
 * @return {number}
 */
function average(salary) {
  let max = 0;
  let min = Infinity;
  return (
    (salary.reduce((acc, curr) => {
      max = Math.max(curr, max);
      min = Math.min(curr, min);
      acc = acc + curr;
      return acc;
    }, 0) -
      max -
      min) /
    (salary.length - 2)
  );
}

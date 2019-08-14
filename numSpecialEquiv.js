//From 893 in LeetCode

function numSpecialEquivGroups(A) {
  let result = [];
  A.forEach(string => {
    let odd = [];
    let even = [];
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        even.push(string[i]);
      } else {
        odd.push(string[i]);
      }
    }
    let organize = odd
      .sort()
      .concat(even.sort())
      .join('');

    if (!result.includes(organize)) {
      result.push(organize);
    }
  });
  return result.length;
};


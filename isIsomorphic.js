//From 205 in LeetCode

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(t, s) {
  let arrayT = t.split('');
  let arrayS = s.split('');
  let checked = {};
  for (let i = 0; i < s.length; i++) {
    if (!checked[s[i]]) {
      let t0 = t[i];
      let s0 = s[i];
      let indexT = arrayT.reduce((acc, curr, index) => {
        if (curr === t0) {
          acc.push(index);
        }
        return acc;
      }, []);
      let indexS = arrayS.reduce((acc, curr, index) => {
        if (curr === s0) {
          acc.push(index);
        }
        return acc;
      }, []);
      if (indexS.join('') !== indexT.join('')) {
        return false;
      }
    }
    checked[s[i]] = true;
  }

  return true;
};

//faster version

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(t, s) {
  let checked = {};
  for (let i = 0; i < s.length; i++) {
    let sCurrent = s[i];
    let tCurrent = t[i];
    let mapped = checked[sCurrent];
    if (mapped !== undefined) {
      if (mapped !== tCurrent) {
        return false;
      }
    } else {
      for (let a in checked) {
        if (checked[a] === tCurrent) {
          return false;
        }
      }
      checked[sCurrent] = tCurrent;
    }
  }

  return true;
};

//fastest

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(t, s) {
  let checked = {};
  let otherCheck = {};
  for (let i = 0; i < s.length; i++) {
    let sCurrent = s[i];
    let tCurrent = t[i];
    let mapped = checked[sCurrent];
    if (mapped !== undefined) {
      if (mapped !== tCurrent) {
        return false;
      }
    } else {
      if (otherCheck[tCurrent] !== undefined) {
        if (otherCheck[tCurrent] !== sCurrent) {
          return false;
        }
      }
      checked[sCurrent] = tCurrent;
      otherCheck[tCurrent] = sCurrent;
    }
  }

  return true;
};

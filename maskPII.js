//From 831 in LeetCode

/**
 * @param {string} S
 * @return {string}
 */
function maskPII(S) {
  let split = S.split('@');
  if (split.length > 1) {
    let name = split[0].toLowerCase();
    let domain = split[1].toLowerCase();
    let masked = `${name[0]}*****${name[name.length - 1]}`;
    return masked + '@' + domain;
  } else {
    let nums = [];
    for (let i = 0; i < S.length; i++) {
      if (S[i] !== ' ' && S[i] * 0 === 0) {
        nums.push(S[i]);
      }
    }
    let lastFour = nums.splice(nums.length - 4);
    let locals = nums.splice(nums.length - 6);
    let masked = nums.length > 0 ? '+' : '';
    for (let i = 0; i < nums.length; i++) {
      masked += '*';
    }
    if (nums.length > 0) {
      masked += '-';
    }
    masked += '***-***-';
    masked += lastFour.join('');
    return masked;
  }
}

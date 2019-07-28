//From 682 in LeetCode

/**
 * @param {string[]} ops
 * @return {number}
 */
function calPoints(ops) {
  let score = 0;
  for (let i = 0; i < ops.length; i++) {
    let scoring = ops[i];
    switch (scoring) {
      case '+':
        let value = ops[i - 1] / 1 + ops[i - 2] / 1;
        score += value;
        ops[i] = value;
        break;
      case 'D':
        let value2 = (ops[i - 1] / 1) * 2;
        score += value2;
        ops[i] = value2;
        break;
      case 'C':
        score -= ops[i - 1] / 1;
        ops.splice(i - 1, 2);
        i -= 2;
        break;
      default:
        score += scoring / 1;
        break;
    }
  }
  return score;
}

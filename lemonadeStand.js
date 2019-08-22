//From 860 in LeetCode

/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
  let bank = { 5: 0, 10: 0, 20: 0 };
  for (let i = 0; i < bills.length; i++) {
    let currentBill = bills[i];
    if (currentBill === 5) {
      bank[5] += 1;
    } else {
      if (currentBill === 20) {
        if (bank[10] >= 1 && bank[5] >= 1) {
          bank[10]--;
          bank[5]--;
          bank[20]++;
        } else if (bank[5] >= 3) {
          bank[5] -= 3;
          bank[20]++;
        } else {
          return false;
        }
      } else {
        if (bank[5] < 1) {
          return false;
        } else {
          bank[5]--;
          bank[10]++;
        }
      }
    }
  }
  return true;
}

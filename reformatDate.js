//From 1507 in LeetCode

/**
 * @param {string} date
 * @return {string}
 */
const months = {};
let string = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'
  .split(' ')
  .forEach((x, index) => {
    if (index < 9) {
      months[x] = '0' + (index + 1);
    } else {
      months[x] = index + 1;
    }
  });
function reformatDate(date) {
  let vals = date.split(' ');
  let month = vals[1];
  let day = vals[0].length === 3 ? '0' + vals[0][0] : vals[0][0] + vals[0][1];
  let year = vals[2];
  return `${year}-${months[month]}-${day}`;
}

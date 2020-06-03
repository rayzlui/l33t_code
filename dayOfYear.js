//From 1154 in Leetcode

/**
 * @param {string} date
 * @return {number}
 */
let leapYears = {};
let date = 1904;
while (date < 2020) {
  leapYears[date] = true;
  date += 4;
}
let days = {
  1: 0,
  2: 31,
  3: 59,
  4: 90,
  5: 120,
  6: 151,
  7: 181,
  8: 212,
  9: 243,
  10: 273,
  11: 304,
  12: 334,
};
function dayOfYear(date) {
  date = date.split('-');
  let year = leapYears[date[0]] ? 1 : 0;
  let month = date[1] / 1;
  let day = date[2] / 1;
  return month > 2 ? year + days[month] + day : days[month] + day;
}

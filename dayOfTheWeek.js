//From 1185 in LeetCode

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

const week = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};
function dayOfTheWeek(day, month, year) {
  let date = new Date();
  date.setYear(year);
  date.setMonth(month - 1);
  date.setDate(day);
  return week[date.getDay()];
}

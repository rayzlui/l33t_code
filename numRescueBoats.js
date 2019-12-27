//From 881 in LeetCode

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
  people = people.sort((x, y) => y - x);
  let boats = 0;
  for (let i = 0; i < people.length; i++) {
    let lightest = people[people.length - 1];
    if (lightest + people[i] <= limit) {
      people.pop();
    }
    boats++;
  }
  return boats;
}

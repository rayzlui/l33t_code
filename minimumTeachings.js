//From 1733 in LeetCode

/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
function minimumTeachings(n, languages, friendships) {
  //track the friendships that need a language taught
  //choose the max that needs to be taught
  let needTeaching = {};
  let willBeTaught = {};
  for (let i = 0; i < friendships.length; i++) {
    let friends = friendships[i];
    let uno = friends[0] - 1;
    let dos = friends[1] - 1;
    let spokenLangs = languages[uno].concat(languages[dos]);
    let noDups = new Set(spokenLangs);
    //if spokenLangs.length === noDups.size => means they dont share languages
    if (noDups.size === spokenLangs.length) {
      if (willBeTaught[uno] === undefined) {
        willBeTaught[uno] = true;
        languages[uno].forEach(x => {
          needTeaching[x] = needTeaching[x] + 1 || 1;
        });
      }
      if (willBeTaught[dos] == undefined) {
        willBeTaught[dos] = true;
        languages[dos].forEach(x => {
          needTeaching[x] = needTeaching[x] + 1 || 1;
        });
      }
    }
  }
  let students = Object.keys(willBeTaught).length;
  if (students === 0) {
    return 0;
  }
  return students - Math.max(...Object.values(needTeaching));
}

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(domains) {
  let result = {};
  let final = [];
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i];
    let splitDomain = domain.split(' ');
    let count = splitDomain[0] / 1;
    let eachDomain = splitDomain[1].split('.');
    for (let j = 0; j < eachDomain.length; j++) {
      let dom = eachDomain.slice(j).join('.');

      result[dom] = result[dom] ? (result[dom] += count) : count;
    }
  }
  for (let a in result) {
    final.push(`${result[a]} ${a}`);
  }
  return final;
}

//From 721 in LeetCode

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  let holder = {};
  for (let i = 0; i < accounts.length; i++) {
    let current = accounts[i];
    let name = current[0];
    let emails = current.slice(1);
    emails.forEach(x => {
      if (holder[x]) {
        holder[x].emails.push(...emails);
      } else {
        holder[x] = {};
        holder[x].emails = emails;
        holder[x].name = name;
      }
    });
  }
  let keys = Object.keys(holder);
  let result = [];
  for (; keys.length > 0; ) {
    let details = [];
    let addEmails = {};
    let current = holder[keys[0]];
    details.push(current.name);
    let emails = current.emails;
    let noDups = new Set(emails);
    emails = Array.from(noDups);

    let additionals = emails;
    while (additionals.length > 0) {
      let nextAdd = [];
      additionals.forEach(x => {
        addEmails[x] = true;

        if (holder[x]) {
          let connectedEmails = holder[x].emails;
          connectedEmails.forEach(y => {
            if (addEmails[y] === undefined) {
              nextAdd.push(y);
              addEmails[y] = true;
            }
          });
          delete holder[x];
        }
      });
      additionals = nextAdd;
    }
    keys = Object.keys(holder);
    let sameEmails = Object.keys(addEmails);
    details.push(...sameEmails.sort());
    result.push(details);
  }
  return result;
}

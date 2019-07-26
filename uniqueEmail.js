//From 929 in LeetCode

/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  let results = [];
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    let splitNameFromDomain = email.split('@');
    let name = splitNameFromDomain[0];
    let newName = '';
    for (let j = 0; j < name.length; j++) {
      if (name[j] === '+') {
        break;
      }
      if (name[j] !== '.') {
        newName += name[j];
      }
    }
    let actualSent = `${newName}@${splitNameFromDomain}[1]`;
    if (!results.includes(actualSent)) {
      results.push(actualSent);
    }
  }
  return results.length;
}

//From 1797 in LeetCode
/**
 * @param {number} timeToLive
 */
class AuthenticationManager {
  constructor(timeToLive) {
    this.timeToLive = timeToLive;
    this.tokens = {};
    return null;
  }
}

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  this.tokens[tokenId] = currentTime;

  return null;
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  let time = this.tokens[tokenId];
  if (time) {
    if (currentTime < time + this.timeToLive) {
      this.tokens[tokenId] = currentTime;
    } else {
      delete this.tokens[tokenId];
    }
  }
  return null;
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  let vals = 0;
  for (let token in this.tokens) {
    let time = this.tokens[token] / 1;
    if (time <= currentTime && time > currentTime - this.timeToLive) {
      vals++;
    } else {
      delete this.tokens[token];
    }
  }
  return vals;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */

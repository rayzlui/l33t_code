//From 911 in LeetCode
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
class TopVotedCandidate {
  constructor(persons, times) {
    this.votes = {};
    this.tally = {};
    let leader = persons[0];
    for (let i = 0; i < persons.length; i++) {
      let vote = persons[i];
      let time = times[i];
      if (this.tally[vote]) {
        this.tally[vote]++;
      } else {
        this.tally[vote] = 1;
      }
      if (this.tally[vote] >= this.tally[leader]) {
        this.votes[time] = vote;
        leader = vote;
      }
    }
  }
}

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  for (let i = t; i >= 0; i--) {
    if (this.votes[i] !== undefined) {
      return this.votes[i];
    }
  }
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

//faster

/**
 * @param {number[]} persons
 * @param {number[]} times
 */
class TopVotedCandidateII {
  constructor(persons, times) {
    this.votes = {};
    this.tally = {};
    let leader = persons[0];
    for (let i = 0; i < persons.length; i++) {
      let vote = persons[i];
      let time = times[i];
      if (this.tally[vote]) {
        this.tally[vote]++;
      } else {
        this.tally[vote] = 1;
      }
      if (this.tally[vote] >= this.tally[leader]) {
        this.votes[time] = vote;
        leader = vote;
      } else {
        this.votes[time] = leader;
      }
    }

    this.time = times.reverse();
  }
}

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  let index = this.time.find(x => x <= t);
  return this.votes[index];
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

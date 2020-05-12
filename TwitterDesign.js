//From 355 in LeetCode

/**
 * Initialize your data structure here.
 */
class Twitter {
  constructor() {
    this.tweets = [];
    this.author = {};
    this.followers = {};
  }
}

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.tweets.unshift(tweetId);
  this.author[tweetId] = userId;
  if (this.followers[userId] === undefined) {
    this.followers[userId] = [userId];
  }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  let feed = [];
  let i = 0;
  if (this.followers[userId] === undefined) {
    return [];
  }
  while (feed.length < 10 && i < this.tweets.length) {
    if (this.followers[userId].includes(this.author[this.tweets[i]])) {
      feed.push(this.tweets[i]);
    }
    i++;
  }
  return feed;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (this.followers[followerId]) {
    this.followers[followerId].push(followeeId);
  } else {
    this.followers[followerId] = [followeeId, followerId];
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (followerId === followeeId) {
    return null;
  }
  if (this.followers[followerId]) {
    let index = this.followers[followerId].indexOf(followeeId);
    if (index !== -1) {
      this.followers[followerId].splice(index, 1);
    }
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

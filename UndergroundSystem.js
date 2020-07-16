//From 1396 in LeetCode

class UndergroundSystem {
  constructor() {
    this.riders = {};
    this.times = {};
  }
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.riders[id] = [stationName, t];
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  let checkIn = this.riders[id];
  let startStation = checkIn[0];
  let startTime = checkIn[1];
  if (this.times[`${startStation}${stationName}`]) {
    this.times[`${startStation}${stationName}`].push(t - startTime);
  } else {
    this.times[`${startStation}${stationName}`] = [t - startTime];
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(
  startStation,
  endStation,
) {
  let times = this.times[`${startStation}${endStation}`];
  return times.reduce((acc, curr) => acc + curr) / times.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

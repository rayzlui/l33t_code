//From 1603 in LeetCode

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
  constructor(big, medium, small) {
    this[1] = big;
    this[2] = medium;
    this[3] = small;
    this.open = { 1: 0, 2: 0, 3: 0 };
  }
}

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  let openSpots = this.open[carType];
  let max = this[carType];
  if (openSpots < max) {
    this.open[carType]++;
    return true;
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

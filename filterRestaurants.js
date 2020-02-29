//From 1333 in LeetCode

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
function filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance) {
  if (veganFriendly) {
    restaurants = restaurants.filter(x => x[2] === 1);
  }
  restaurants = restaurants.filter(x => x[4] <= maxDistance);
  restaurants = restaurants.filter(x => x[3] <= maxPrice);
  return restaurants
    .sort((x, y) => {
      if (y[1] === x[1]) {
        return y[0] - x[0];
      }
      return y[1] - x[1];
    })
    .map(y => y[0]);
}

//faster

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
function filterRestaurantsII(
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance,
) {
  if (veganFriendly) {
    restaurants = restaurants.filter(x => x[2] === 1);
  }
  restaurants = restaurants.filter(
    x => x[4] <= maxDistance && x[3] <= maxPrice,
  );
  return restaurants
    .sort((x, y) => {
      if (y[1] === x[1]) {
        return y[0] - x[0];
      }
      return y[1] - x[1];
    })
    .map(y => y[0]);
}

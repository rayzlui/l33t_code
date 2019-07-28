//From 1104 in LeetCode

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
function distributeCandies(candies, num_people) {
  let distribution = [];
  let i = 0;
  for (; i < candies; i++) {
    let candy = i + 1;
    let give = i % num_people;
    distribution[give] = distribution[give]
      ? distribution[give] + candy
      : candy;
    candies -= candy;
  }
  let give = i % num_people;
  distribution[give] = distribution[give]
    ? distribution[give] + candies
    : candies;
  if (distribution.length < num_people) {
    let diff = num_people - distribution.length;
    for (let j = 0; j < diff; j++) {
      distribution.push(0);
    }
  }
  return distribution;
}

//faster

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
function distributeCandies2(candies, num_people) {
  let distribution = [];

  let passing = 1;
  while (candies > 0) {
    for (let i = 0; i < num_people; i++) {
      if (passing > candies) {
        distribution[i] = distribution[i] ? distribution[i] + candies : candies;
        candies = 0;
      } else {
        distribution[i] = distribution[i] ? distribution[i] + passing : passing;
        candies -= passing;
        passing++;
      }
    }
  }
  return distribution;
}

//From 1010 in LeetCode

/**
 * @param {number[]} time
 * @return {number}
 */
let numPairsDivisibleBy60 = function(time) {
  let songs = 0;
  for (let i = 0; i < time.length; i++) {
    let currentSong = time[i];
    for (let j = i + 1; j < time.length; j++) {
      let additionalSong = time[j];
      let songLength = (currentSong + additionalSong) / 60;
      if (songLength === Math.floor(songLength)) {
        songs++;
      }
    }
  }
  return songs;
};

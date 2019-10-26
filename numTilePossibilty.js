//From 1079 in LeetCode

/**
 * @param {string} tiles
 * @return {number}
 */
function numTilePossibilities(tiles) {
  tiles = tiles.split('');
  let store = {};
  function recursiveBuild(curr, tiles) {
    if (tiles.length === 0) {
      return;
    }
    for (let i = 0; i < tiles.length; i++) {
      let currentTile = curr + tiles[i];
      if (!store[currentTile]) {
        store[currentTile] = true;
      }
      let copy = tiles.slice();
      copy.splice(i, 1);
      recursiveBuild(currentTile, copy);
    }
  }
  recursiveBuild('', tiles);
  return Object.keys(store).length;
}

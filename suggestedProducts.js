//From 1268 in LeetCode

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
function suggestedProducts(products, searchWord) {
  let result = [];
  let currentType = '';
  for (let i = 0; i < searchWord.length; i++) {
    currentType += searchWord[i];
    let similar = products.filter(x => x.slice(0, i + 1) === currentType);
    similar = similar.sort((x, y) => x.localeCompare(y));
    if (similar.length > 3) {
      result.push(similar.slice(0, 3));
    } else {
      result.push(similar);
    }
  }
  return result;
}

//faster

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
function suggestedProductsII(products, searchWord) {
  let result = [];
  let currentType = '';
  products = products.sort((x, y) => x.localeCompare(y));
  for (let i = 0; i < searchWord.length; i++) {
    currentType += searchWord[i];
    products = products.filter(x => x.slice(0, i + 1) === currentType);
    if (products.length > 3) {
      result.push(products.slice(0, 3));
    } else {
      result.push(products);
    }
  }
  return result;
}

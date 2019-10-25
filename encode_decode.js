//From 535 in LeetCode

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let store = {};
let alphabet = 'abcdefghijlmnopqrstuvwxyz';
let num = '1234567890';
let dict = alphabet.toUpperCase() + alphabet + num;

function encode(longUrl) {
  let code = '';
  for (let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * dict.length);
    code += dict[rand];
  }
  store[code] = longUrl;
  return 'http://tinyurl.com/' + code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
function decode(shortUrl) {
  let code = shortUrl.split('.com/');
  let url = store[code[1]];
  return url;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

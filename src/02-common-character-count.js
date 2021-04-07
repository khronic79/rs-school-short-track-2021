/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Local = s1.split('');
  const s2Local = s2.split('');
  const set1 = new Set(s1Local);
  let result = 0;
  const array = [...set1];
  for (let i = 0; i < array.length; i++) {
    let count1 = 0;
    let count2 = 0;
    count1 = s1Local.reduce((ret, itm) => {
      let retLocal = ret;
      if (array[i] === itm) { retLocal++; }
      return retLocal;
    }, 0);
    count2 = s2Local.reduce((ret, itm) => {
      let retLocal = ret;
      if (array[i] === itm) { retLocal++; }
      return retLocal;
    }, 0);
    result += Math.min(count1, count2);
  }
  return result;
}

module.exports = getCommonCharacterCount;

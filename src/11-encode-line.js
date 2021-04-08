/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let string = str;
  const len = string.length - 1;
  let counter = 1;
  let letter = '';
  string = string.split('').reduce((acc, itm, i) => {
    const accum = acc;
    const item = itm;
    const iter = i;
    if (iter === len) {
      if (letter === item) {
        counter++;
        return accum + counter + letter;
      }
      if (counter === 1) { return accum + letter + item; }
      return accum + counter + letter + item;
    }
    if (letter === item) {
      counter++;
      return accum;
    }
    if (counter === 1) {
      const temp = letter;
      letter = item;
      return accum + temp;
    }
    const temp = letter;
    const counterTemp = counter;
    letter = item;
    counter = 1;
    return accum + counterTemp + temp;
  }, '');
  return string;
}

module.exports = encodeLine;

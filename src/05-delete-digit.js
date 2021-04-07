/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nn = n;
  nn += '';
  let arr = nn.split('');
  arr.splice(0, 1);
  let max = 1 * arr.join('');
  for (let i = 1; i < nn.length; i++) {
    arr = nn.split('');
    arr.splice(i, 1);
    const next = 1 * arr.join('');
    if (max < next) {
      max = next;
    }
  }
  return max;
}

module.exports = deleteDigit;

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrLocal = arr;
  const inter = [];
  for (let i = arrLocal.length - 1; i >= 0; i--) {
    if (arrLocal[i] === -1) {
      inter.unshift(i);
      arrLocal.splice(i, 1);
    }
  }
  arrLocal.sort((a, b) => a - b);
  for (let i = 0; i < inter.length; i++) {
    arrLocal.splice(inter[i], 0, -1);
  }
  return arrLocal;
}

module.exports = sortByHeight;

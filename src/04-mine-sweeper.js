/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixLocal = matrix;
  const output = [];
  const n = matrixLocal.length;
  const k = matrixLocal[0].length;
  for (let i = 0; i < n; i++) {
    output[i] = [];
    for (let j = 0; j < k; j++) {
      const mask = [];
      mask[0] = ((i - 1) >= 0) && ((j - 1) >= 0) ? matrixLocal[i - 1][j - 1] * 1 : 0;
      mask[1] = (i - 1) >= 0 ? matrixLocal[i - 1][j] * 1 : 0;
      mask[2] = ((i - 1) >= 0) && ((j + 1) < k) ? matrixLocal[i - 1][j + 1] * 1 : 0;
      mask[3] = (j + 1) < k ? matrixLocal[i][j + 1] * 1 : 0;
      mask[4] = ((i + 1) < n) && ((j + 1) < k) ? matrixLocal[i + 1][j + 1] * 1 : 0;
      mask[5] = (i + 1) < n ? matrixLocal[i + 1][j] * 1 : 0;
      mask[6] = ((i + 1) < n) && ((j - 1) > 0) ? matrixLocal[i + 1][j - 1] * 1 : 0;
      mask[7] = ((j - 1) >= 0) ? matrixLocal[i][j - 1] * 1 : 0;
      output[i][j] = mask[0] + mask[1] + mask[2] + mask[3] + mask[4] + mask[5] + mask[6] + mask[7];
    }
  }
  return output;
}

module.exports = minesweeper;

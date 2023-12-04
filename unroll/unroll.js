function unroll(squareArray) {
  let result = [];

  let rowStart = 0;
  let colStart = 0;
  let rowEnds = squareArray.length - 1;
  let colEnds = squareArray.length - 1;

  while (rowStart <= rowEnds && colStart <= colEnds) {
    //going right
    for (let i = colStart; i <= colEnds; i++) {
      result.push(squareArray[rowStart][i]);
    }
    rowStart++;
    for (let i = rowStart; i <= rowEnds; i++) {
      result.push(squareArray[i][colEnds]);
    }
    colEnds--;
    if (rowStart <= rowEnds) {
      for (let i = colEnds; i >= colStart; i--) {
        result.push(squareArray[rowEnds][i]);
      }
    }
    rowEnds--;
    if (colStart <= colEnds) {
      for (let i = rowEnds; i >= rowStart; i--) {
        result.push(squareArray[i][colStart]);
      }
      colStart++;
    }
  }
  return result;
}

module.exports = unroll;

module.exports = class Matrix {
  constructor(matrixString) {
    this.rows = this._matrixStringToRowMatrix(matrixString);
    this.columns = this._rowMatrixToColumnMatrix();
  }

  _matrixStringToRowMatrix(matrixString) {
    return this._matrixStringToRowStrings(matrixString).map(
      this._rowStringToArrayOfNumbers
    );
  }

  _rowMatrixToColumnMatrix() {
    return this.rows[0].map((_, index) =>
      this._grabItemsFromEachRowAtGivenIndex(index)
    );
  }

  _matrixStringToRowStrings(matrixString) {
    return matrixString.split("\n");
  }

  _rowStringToArrayOfNumbers(rowString) {
    return rowString.split(" ").map(x => parseInt(x));
  }

  _grabItemsFromEachRowAtGivenIndex(index) {
    return this.rows.map(row => row[index]);
  }
};

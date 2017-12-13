module.exports = class Matrix {
  constructor(matrixString) {
    this.rows = this._matrixStringToRowMatrix(matrixString);
    this.columns = this._rowsToColumns();
  }

  _matrixStringToRowMatrix(matrixString) {
    return this._matrixStringToRowStrings(matrixString).map(
      this._rowStringToArrayOfNumbers
    );
  }

  _rowsToColumns() {
    return this.rows.reduce(this._reduceRowsToColumns, []);
  }

  _matrixStringToRowStrings(matrixString) {
    return matrixString.split("\n");
  }

  _rowStringToArrayOfNumbers(rowString) {
    return rowString.split(" ").map(x => parseInt(x));
  }

  _reduceRowsToColumns(columns, row) {
    row.forEach((cell, index) => {
      if (!columns[index]) columns[index] = [];
      columns[index].push(cell);
    });

    return columns;
  }
};

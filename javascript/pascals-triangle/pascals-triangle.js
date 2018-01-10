module.exports = class Triagle {
  constructor(numRows) {
    this._firstRow = [1];
    this.rows = this._calculateRows(numRows);
  }

  _calculateRows(numRows) {
    const rows = [this._firstRow];
    toNextRow: for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
      rows.push(this._calculateRow(rows[rowIndex - 1]));
    }
    return rows;
  }

  get lastRow() {
    return this.rows[this.rows.length - 1];
  }

  _calculateRow(previousRow) {
    const row = previousRow.map(
      (number, index) =>
        this._isFirst(index) ? number : number + previousRow[index - 1]
    );
    row.push(1);
    return row;
  }

  _isFirst(index) {
    return index === 0;
  }
};

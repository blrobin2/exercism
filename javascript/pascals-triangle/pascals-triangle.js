module.exports = class Triagle {
  constructor(numRows) {
    this.rows = this._calculateRows(numRows);
    this.lastRow = this.rows[this.rows.length - 1];
  }

  _calculateRows(numRows) {
    const rows = [];
    toNextRow: for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      if (this._isFirstRow(rowIndex)) {
        rows.push([1]);
        continue toNextRow;
      }
      const row = this._calculateRow(rowIndex, rows);
      rows.push(row);
    }
    return rows;
  }

  _isFirstRow(index) {
    return index === 0;
  }

  _calculateRow(rowIndex, rows) {
    const row = [];
    toNextNumber: for (let numIndex = 0; numIndex <= rowIndex; numIndex++) {
      if (this._isFirstOrLastNumber(numIndex, rowIndex)) {
        row.push(1);
        continue toNextNumber;
      }
      const previousRow = rows[rowIndex - 1];
      row.push(previousRow[numIndex] + previousRow[numIndex - 1]);
    }
    return row;
  }

  _isFirstOrLastNumber(numIndex, rowIndex) {
    return numIndex === 0 || numIndex === rowIndex;
  }
};

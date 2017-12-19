const BigInt = require("./big-integer");

module.exports = class Grains {
  constructor() {
    this._NUMBER_OF_SQUARES_ON_CHESSBOARD = 64;
  }
  square(squareNumber) {
    return this._getSquare(squareNumber).toString();
  }

  total() {
    let total = 0;
    for (
      let squareNumber = 1;
      squareNumber <= this._NUMBER_OF_SQUARES_ON_CHESSBOARD;
      squareNumber++
    )
      total = this._getSquare(squareNumber).plus(total);
    return total.toString();
  }

  _getSquare(squareNumber) {
    return squareNumber === 1
      ? BigInt(squareNumber)
      : this._getSquare(squareNumber - 1).multiply(2);
  }
};

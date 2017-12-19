const BigInt = require("./big-integer");

module.exports = class Grains {
  constructor() {
    this._NUMBER_OF_SQUARES_ON_CHESSBOARD = 64;
  }
  square(squareNumber) {
    return BigInt(2)
      .pow(squareNumber - 1)
      .toString();
  }

  total() {
    return BigInt(2)
      .pow(this._NUMBER_OF_SQUARES_ON_CHESSBOARD)
      .subtract(1)
      .toString();
  }
};

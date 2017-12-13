module.exports = class Binary {
  constructor(binary) {
    if (!this._isOnlyOnesAndZeros(binary)) {
      this.binary = [];
    } else {
      this.binary = [...binary];
    }
    this.BASE_2 = 2;
  }

  toDecimal() {
    //101 => (1 * 2 ^ 2) + (0 * 2 ^ 1) + (1 * 2 ^ 0)
    return this.binary.reduce(
      (total, number, index) =>
        total +
        this._powerOfTwoConversion(number, this._getPositionFromEnd(index)),
      0
    );
  }

  _powerOfTwoConversion(number, positionFromEnd) {
    return parseInt(number) * Math.pow(this.BASE_2, positionFromEnd);
  }

  _isOnlyOnesAndZeros(string) {
    return string.match(/^[0-1]*$/g);
  }

  _getPositionFromEnd(index) {
    return this.binary.length - 1 - index;
  }
};

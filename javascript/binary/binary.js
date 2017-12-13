module.exports = class Binary {
  constructor(binary) {
    if (!this._isOnlyOnesAndZeros(binary)) {
      this.binary = [];
    } else {
      this.binary = [...binary];
    }
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

  _isOnlyOnesAndZeros(string) {
    return string.match(/^[0-1]*$/g);
  }

  _powerOfTwoConversion(number, positionFromEnd) {
    // same as number * Math.pow(2, positionFromEnd)
    return number << positionFromEnd;
  }

  _getPositionFromEnd(index) {
    return this.binary.length - 1 - index;
  }
};

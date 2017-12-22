module.exports = class Trinary {
  constructor(number) {
    this.number = number.split("");
  }

  toDecimal() {
    return this.number.reduce(this._combineTrinariesToDecimal.bind(this), 0);
  }

  _combineTrinariesToDecimal(decimal, digit, index) {
    if (isNaN(digit)) return 0;
    return decimal + this._calculateDecimalForDigitAtIndex(digit, index);
  }

  _calculateDecimalForDigitAtIndex(digit, index) {
    const TRIANRY_BASE = 3;
    return (
      parseInt(digit) *
      Math.pow(TRIANRY_BASE, this._getPlaceInTrinaryBy(index))
    );
  }

  _getPlaceInTrinaryBy(index) {
    return this.number.length - index - 1;
  }
};

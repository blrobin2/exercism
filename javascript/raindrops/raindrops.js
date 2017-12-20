module.exports = class Raindrops {
  constructor() {
    this._factors = {
      3: "Pling",
      5: "Plang",
      7: "Plong"
    };
  }

  convert(number) {
    return this._checkFactors(number) || number.toString();
  }

  _checkFactors(number) {
    return Object.keys(this._factors)
      .filter(factor => this._isFactor(factor, number))
      .map(factor => this._factors[factor])
      .join("");
  }

  _isFactor(factor, number) {
    return number % factor === 0;
  }
};

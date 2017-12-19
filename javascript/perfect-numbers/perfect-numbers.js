module.exports = class PerfectNumbers {
  constructor() {
    this._PERFECT = "perfect";
    this._ABUNDANT = "abundant";
    this._DEFICIENT = "deficient";
  }

  classify(number) {
    if (number <= 0) return "Classification is only possible for natural numbers.";

    return this._getClassification(number);
  }

  _getClassification(number) {
    const aliquotSum = this._getSumOfFactors(number);
    if (aliquotSum === number) return this._PERFECT;
    if (aliquotSum > number) return this._ABUNDANT;
    return this._DEFICIENT;
  }

  _getSumOfFactors(number) {
    let sum = 0;
    for (let i = 1; i <= (number / 2); i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
};

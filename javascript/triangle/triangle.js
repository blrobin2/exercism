module.exports = class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    this._EQUILATERAL = "equilateral";
    this._ISOSCELES = "isosceles";
    this._SCALENE = "scalene";
  }

  kind() {
    if (this._isInvalidTriangle()) throw new Error("Invalid sizes");
    return this._getKind();
  }

  _isInvalidTriangle() {
    return (
      this._anySidesAreZeroOrLess() ||
      this._sumOfTwoSideLengthsLessThanLengthOfThird()
    );
  }

  _getKind() {
    if (this._allSidesAreEqual()) return this._EQUILATERAL;
    if (this._atLeastTwoSidesAreEqual()) return this._ISOSCELES;
    return this._SCALENE;
  }

  _anySidesAreZeroOrLess() {
    return this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0;
  }

  _sumOfTwoSideLengthsLessThanLengthOfThird() {
    return (
      this.sideA + this.sideB < this.sideC ||
      this.sideB + this.sideC < this.sideA ||
      this.sideC + this.sideA < this.sideB
    );
  }

  _allSidesAreEqual() {
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }

  _atLeastTwoSidesAreEqual() {
    return (
      this.sideA === this.sideB ||
      this.sideB === this.sideC ||
      this.sideC === this.sideA
    );
  }
};

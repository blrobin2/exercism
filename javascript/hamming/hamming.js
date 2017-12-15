module.exports = class Hamming {
  compute(firstStrand, secondStrand) {
    if (firstStrand.length !== secondStrand.length)
      throw new Error("DNA strands must be of equal length.");
    this._makeSequences(firstStrand, secondStrand);
    return this._countDifferences();
  }

  _makeSequences(firstStrand, secondStrand) {
    this._expandedFirstStrand = firstStrand.split("");
    this._expandedSecondStrand = secondStrand.split("");
  }

  _countDifferences() {
    return this._expandedFirstStrand.reduce(
      (numberOfDifferences, letter, index) =>
        letter !== this._expandedSecondStrand[index]
          ? numberOfDifferences + 1
          : numberOfDifferences,
      0
    );
  }
};

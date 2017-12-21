module.exports = class Crypto {
  constructor(phrase) {
    this._phrase = phrase;
    this._cipherText = "";
  }

  normalizePlaintext() {
    return this._phrase
      .toLowerCase()
      .match(/\w/g)
      .join("");
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
  }

  plaintextSegments() {
    return this.normalizePlaintext().match(this._getChunkAtSize());
  }

  _getChunkAtSize() {
    return new RegExp(`.{1,${this.size()}}`, "g");
  }

  ciphertext() {
    if (!this._cipherText) this._calculateCipherText();
    return this._cipherText;
  }

  _calculateCipherText() {
    for (let i = 0; i < this.size(); i++)
      this._getCharacterAtIndexOfEachSegment(i);
  }

  _getCharacterAtIndexOfEachSegment(index) {
    for (let segment of this.plaintextSegments())
      if (segment[index]) this._cipherText += segment[index];
  }
};

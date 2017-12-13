module.exports = class Pangram {
  constructor(string) {
    this.string = string;
    this.SIZE_OF_ALPHABET = 26;
    this.ONLY_ALPHA_CHARACTERS = /[a-z]/g;
  }

  isPangram() {
    return (
      new Set(this._getAlphaCharactersFromString()).size ===
      this.SIZE_OF_ALPHABET
    );
  }

  _getAlphaCharactersFromString() {
    return this.string.toLowerCase().match(this.ONLY_ALPHA_CHARACTERS);
  }
};

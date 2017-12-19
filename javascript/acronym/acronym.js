module.exports = class Acronyms {
  static parse(phrase) {
    return phrase
      .split(this._spaceOrHyphen)
      .map(this._getAcronym.bind(this))
      .join("")
      .replace(this._specialCharacters, "");
  }

  static get _spaceOrHyphen() {
    return /\s|\-/;
  }

  static _getAcronym(word) {
    return this._getUpperCaseLetters(this._uppercaseWord(word));
  }

  static get _specialCharacters() {
    return /[\s\,]/g;
  }

  static _uppercaseWord(word) {
    return word[0].toUpperCase() + word.substring(1);
  }

  static _getUpperCaseLetters(word) {
    return word.match(/[A-Z]/g);
  }
};
module.exports = class Isogram {
  constructor(word) {
    this._word = word.split("");
    this._occuringLetters = new Set();
  }

  isIsogram() {
    return this._word.reduce(
      (isIsogram, character) =>
        isIsogram && this._isUniqueLetter(character),
      true
    );
  }

  _isUniqueLetter(character) {
    const letter = character.toLowerCase();
    if (this._occuringLetters.has(letter)) return false;
    if (this._isLetter(letter)) this._occuringLetters.add(letter);
    return true;
  }

  _isLetter(character) {
    return character.match(/[A-Za-z\u00C0-\u017F]/);
  }
};

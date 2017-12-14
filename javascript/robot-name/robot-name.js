const usedNames = new Set;

module.exports = class Robot {
  constructor() {
    this.CHAR_CODE_A = "a".charCodeAt();
    this.CHAR_CODE_Z = "z".charCodeAt();
    this.name = this._constructName();
  }

  reset() {
    this.name = this._constructName();
  }

  _constructName() {
    let name;
    while (usedNames.has((name = this._generateString())));
    usedNames.add(name);
    return name;
  }

  _generateString() {
    return this._randomLetter() + this._randomLetter() + this._randomNumber();
  }

  _randomLetter() {
    return String.fromCharCode(
      this._random(this.CHAR_CODE_A, this.CHAR_CODE_Z)
    ).toUpperCase();
  }

  _randomNumber() {
    return this._random(111, 999).toString();
  }

  _random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

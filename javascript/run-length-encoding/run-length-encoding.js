module.exports = class RLE {
  static encode(string) {
    return EncodeRLE.encode(string);
  }

  static decode(string) {
    return DecodeRLE.decode(string);
  }
};

class EncodeRLE {
  static encode(string) {
    this.string = string;
    this.currentLetter = this.string.charAt();
    this.currentIndex = 0;
    this.letterCount = 0;
    return this._buildString();
  }

  static _buildString() {
    let code = "";
    for (let i = 0; i <= this.string.length; i++) {
      this.currentIndex = i;
      code += this._getCharacterBits();
    }
    return code;
  }

  static _getCharacterBits() {
    if (! this._charactersAreTheSame())
      return this._getBitAndStartCountingNextCharacter();
    return this._keepCountingTheSameLetter();
  }

  static _charactersAreTheSame() {
    return this.string.charAt(this.currentIndex) === this.currentLetter;
  }

  static _getBitAndStartCountingNextCharacter() {
    const bit = this._getEncodedBit();
    this._setupLoopForNextLetter();
    return bit;
  }

  static _keepCountingTheSameLetter() {
    this.letterCount++;
    return "";
  }

  static _getEncodedBit() {
    return this.letterCount > 1
      ? `${this.letterCount}${this.currentLetter}`
      : `${this.currentLetter}`;
  }

  static _setupLoopForNextLetter() {
    this.currentLetter = this.string.charAt(this.currentIndex);
    this.letterCount = 1;
  }
}

class DecodeRLE {
  static decode(string) {
    this.stringArr = string.split("");
    this.index = 0;
    return this._buildString();
  }

  static _buildString() {
    let bits = "";
    for (let index = 0; index < this.stringArr.length; index++) {
      this.index = index;
      bits += this._getCharacters();
    }
    return bits;
  }

  static _getCharacters() {
    if (this._isTwoDigitCharacterCount())
      return this._getExpandedCharactersForDoubleDigits();
    if (this._isOneDigitCharacterCount())
      return this._getExpandedCharactersForSingleDigit();
    if (this._isJustCharacter())
      return this.stringArr[this.index];

    return "";
  }

  static _isTwoDigitCharacterCount() {
    return this._characterIsANumber() && this._nexCharacterIsANumber();
  }

  static _isOneDigitCharacterCount() {
    return this._characterIsANumber() && this._previousCharacterIsNotANumber();
  }

  static _isJustCharacter() {
    return this._previousCharacterIsNotANumber();
  }

  static _characterIsANumber() {
    return parseInt(this.stringArr[this.index]);
  }

  static _nexCharacterIsANumber() {
    return parseInt(this.stringArr[this.index + 1]);
  }

  static _previousCharacterIsNotANumber(index) {
    return !parseInt(this.stringArr[this.index - 1]);
  }

  static _getExpandedCharactersForDoubleDigits() {
    const count = this._getDoubleDigitCount();
    const associatedLetter = this._getDoubleDigitLetter();
    return associatedLetter.repeat(count);
  }

  static _getExpandedCharactersForSingleDigit() {
    const count = this.stringArr[this.index];
    const associatedLetter = this.stringArr[this.index + 1];
    return associatedLetter.repeat(count);
  }

  static _getDoubleDigitCount() {
    return parseInt(
      this.stringArr[this.index] + this.stringArr[this.index + 1]
    );
  }

  static _getDoubleDigitLetter() {
    return this.stringArr[this.index + 2];
  }
}

module.exports = class Cipher {
  constructor(key = "aaaaaaaaaa") {
    if (!this._isAllLowerCaseLetters(key)) {
      throw new Error("Bad key");
    }
    this.key = key;
    this.LENGTH_OF_ALPHABET = 26;
    this.CHAR_CODE_A = "a".charCodeAt();
    this.CHAR_CODE_Z = "z".charCodeAt();
    this.map = this._createMapFromKey();
  }

  _isAllLowerCaseLetters(string) {
    return /^[a-z]+$/.test(string);
  }

  _createMapFromKey() {
    return [...this.key].map(this._mapLetterToAlphabetIndex.bind(this));
  }

  _mapLetterToAlphabetIndex(letter) {
    return letter.charCodeAt() - this.CHAR_CODE_A;
  }

  encode(string) {
    return this._processString(string, this._performEncode.bind(this));
  }

  decode(string) {
    return this._processString(string, this._performDecode.bind(this));
  }

  _processString(string, processingFunction) {
    return [...string]
      .map((letter, index) => {
        const code = processingFunction(letter, index);
        return String.fromCharCode(this._wrapCharCodeBackAround(code));
      })
      .join("");
  }

  _performEncode(letter, index) {
    return letter.charCodeAt() + this.map[index % this.key.length];
  }

  _performDecode(letter, index) {
    return letter.charCodeAt() - this.map[index % this.key.length];
  }

  _wrapCharCodeBackAround(code) {
    if (this._codeComesBeforeAlphabet(code)) code += this.LENGTH_OF_ALPHABET;
    if (this._codeComesAfterAlphabet(code)) code -= this.LENGTH_OF_ALPHABET;
    return code;
  }

  _codeComesBeforeAlphabet(code) {
    return code < this.CHAR_CODE_A;
  }

  _codeComesAfterAlphabet(code) {
    return code > this.CHAR_CODE_Z;
  }
};

module.exports = class SecretHandshake {
  constructor(number) {
    if (isNaN(number)) {
      throw new Error("Handshake must be a number");
    }
    this.number = number;
    this._LENGTH_THAT_TRIGGERS_COMMAND_REVERSE = 5;
  }

  commands() {
    return this._binaryNumber
      .split("")
      .reduce(this._reduceBinaryToCommandCollection.bind(this), []);
  }

  get _binaryNumber() {
    return (this.number >>> 0).toString(2);
  }

  _reduceBinaryToCommandCollection(collection, number, index) {
    if (this._shouldSkipCurrentNumber(number, index)) return collection;
    const handshake = this._getHandshake(index);
    return this._appendHandshakeToCollection(handshake, collection);
  }

  _shouldSkipCurrentNumber(number, index) {
    return number == 0 || this._isReverseIndex(index);
  }

  _getHandshake(currentIndex) {
    return this._handshakes[this._getPosition(currentIndex)];
  }

  _appendHandshakeToCollection(handshake, collection) {
    return this._shouldReverse
      ? this._addToEndOfCollection(handshake, collection)
      : this._addToStartOfCollection(handshake, collection);
  }

  _isReverseIndex(index) {
    return index === 0 && this._shouldReverse;
  }

  get _handshakes() {
    return {
      1: "wink",
      10: "double blink",
      100: "close your eyes",
      1000: "jump"
    };
  }

  _getPosition(currentIndex) {
    return "1" + this._getZeroes(currentIndex);
  }

  get _shouldReverse() {
    return (
      this._binaryNumber.length === this._LENGTH_THAT_TRIGGERS_COMMAND_REVERSE
    );
  }

  _addToEndOfCollection(element, array) {
    return [...array, element];
  }

  _addToStartOfCollection(element, array) {
    return [element, ...array];
  }

  _getZeroes(currentIndex) {
    return this._binaryNumber.length === 1
      ? ""
      : "0".repeat(this._binaryNumber.length - currentIndex - 1);
  }
};

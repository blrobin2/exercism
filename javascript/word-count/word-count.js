module.exports = class Words {
  count(words) {
    return words
      .split(this._splitOnSpaceOrCommas)
      .map(this._cleanupString.bind(this))
      .filter(this._isNotEmptySpace)
      .reduce(this._countEachWord.bind(this), {});
  }

  get _splitOnSpaceOrCommas() {
    return /\s|\,/g;
  }

  _cleanupString(word) {
    return this._removeQuotationMarks(
      this._removeSpecialCharacters(word.toLowerCase())
    );
  }

  _isNotEmptySpace(word) {
    return word.length > 0;
  }

  _countEachWord(counts, word) {
    this._isNotCountedYet(word, counts) ? (counts[word] = 1) : counts[word]++;
    return counts;
  }

  _removeSpecialCharacters(word) {
    return word.replace(/[!&@$%^&.:¡¿?]/g, "");
  }

  _removeQuotationMarks(word) {
    return word.replace(/\'(.*)\'/, "$1");
  }

  _isNotCountedYet(word, object) {
    return (
      this._isANewWord(word, object) ||
      this._isReservedWordOnPrototype(word, object)
    );
  }

  _isANewWord(word, object) {
    return !object[word];
  }

  _isReservedWordOnPrototype(word, object) {
    return isNaN(object[word]);
  }
};

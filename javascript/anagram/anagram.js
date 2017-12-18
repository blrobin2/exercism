module.exports = class Anagram {
  constructor(subject) {
    this._subject = subject.toLowerCase();
  }

  matches(...list) {
    const potentialMatches = this._getPotentialMatches(list);
    return this._getMatchesFrom(potentialMatches);
  }

  _getPotentialMatches(list) {
    return this._firstElementIsArray(list) ? list[0] : list;
  }

  _getMatchesFrom(potentialMatches) {
    return potentialMatches.filter(match =>
      this._isAnagram(match.toLowerCase())
    );
  }

  _firstElementIsArray(list) {
    return Array.isArray(list[0]);
  }

  _isAnagram(word) {
    return (
      this._subject !== word &&
      this._getSortedWord(this._subject) === this._getSortedWord(word)
    );
  }

  _getSortedWord(word) {
    return word.split('').sort().join('');
  }
};

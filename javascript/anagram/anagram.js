module.exports = class Anagram {
  constructor(subject) {
    this._subject = subject.toLowerCase();
  }

  matches(...matches) {
    const potentialMatches = this._getListOfPotentialMatches(matches);
    return this._getMatchesFrom(potentialMatches);
  }

  _getListOfPotentialMatches(list) {
    return this._firstElementIsArray(list) ? list[0] : list;
  }

  _getMatchesFrom(list) {
    return list.reduce(
      (actualMatches, match) =>
        this._isAnagram(match.toLowerCase())
          ? actualMatches.concat(match)
          : actualMatches,
      []
    );
  }

  _firstElementIsArray(list) {
    return list.length === 1 && Array.isArray(list[0]);
  }

  _isAnagram(word) {
    return (
      this._subject !== word &&
      this._objectsAreEquivalent(
        this._getLetterCounts(this._subject),
        this._getLetterCounts(word)
      )
    );
  }

  _objectsAreEquivalent(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (let prop in a) {
      if (a[prop] !== b[prop]) return false;
    }
    return true;
  }

  _getLetterCounts(word) {
    return word.split("").reduce((letterCounts, letter) => {
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
      return letterCounts;
    }, {});
  }
};

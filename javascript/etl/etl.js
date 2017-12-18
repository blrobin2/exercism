module.exports = class ETL {
  transform(oldScores) {
    this.oldScores = oldScores;
    this.newScore = {};
    return this._transformOldScoresToNewScores();
  }

  _transformOldScoresToNewScores() {
    return Object.keys(this.oldScores).reduce(
      this._addScoreToNewScore.bind(this),
      this.newScore
    );
  }

  _addScoreToNewScore(_, score) {
    const lettersThatScoredValue = this.oldScores[score];
    lettersThatScoredValue.forEach(letter =>
      this._addScoreToLetter(score, letter)
    );
    return this.newScore;
  }

  _addScoreToLetter(score, letter) {
    this.newScore[letter.toLowerCase()] = parseInt(score);
  }
};

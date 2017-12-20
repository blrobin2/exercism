module.exports = class Allergies {
  constructor(score) {
    this._potentialAllergies = [
      "eggs",
      "peanuts",
      "shellfish",
      "strawberries",
      "tomatoes",
      "chocolate",
      "pollen",
      "cats"
    ];
    this._allergyScores = this._assignPointsToAllergies();
    this._score = this._ignoreOtherAllergies(score);
    this._allergies = this._getAlleriesFromScore();
  }

  list() {
    return this._allergies;
  }

  allergicTo(thing) {
    return this._allergies.includes(thing);
  }

  _assignPointsToAllergies() {
    return this._potentialAllergies.reduce((scores, allergen, index) => {
      scores[Math.pow(2, index)] = allergen;
      return scores;
    }, {});
  }

  _ignoreOtherAllergies(score) {
    let highestScore = this._highestPossibleScore();
    if (score < highestScore) return score;
    while (highestScore < score) highestScore *= 2;
    return (score - highestScore / 2);
  }

  _getAlleriesFromScore(score = this._score) {
    if (score === 0) return [];
    for (let i = score; i > 0; i--)
      if (this._allergyScores[i]) return this._appendAllergy(score, i);
  }

  _highestPossibleScore() {
    const scores = Object.keys(this._allergyScores);
    return scores[scores.length - 1] * 2;
  }

  _appendAllergy(score, index) {
    return [
      ...this._getAlleriesFromScore(score - index),
      this._allergyScores[index]
    ];
  }
};

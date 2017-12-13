//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.year = input;
};

Year.prototype.isLeap = function() {
  if (this._is400YearReintroduction()) {
    return true;
  }
  if (this._is100YearSkip()) {
    return false;
  }
  return this.year % 4 === 0;
};

Year.prototype._is400YearReintroduction = function() {
  return this.year % 400 === 0;
};

Year.prototype._is100YearSkip = function() {
  return this.year % 100 === 0;
};

module.exports = Year;

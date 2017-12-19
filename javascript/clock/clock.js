class Clock {
  constructor(hours, minutes = 0) {
    this._HOURS = 24;
    this._MINUTES = 60;

    this.hours = hours;
    this.minutes = minutes;
    this._calculateTime();
  }

  toString() {
    return `${this._paddedHours()}:${this._paddedMinutes()}`;
  }

  plus(minutes) {
    this.minutes += minutes;
    this._calculateTime();
    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;
    this._calculateTime();
    return this;
  }

  equals(otherClock) {
    return this.toString() === otherClock.toString();
  }

  _calculateTime() {
    this._handleNegativeMinutes();
    this._handleNegativeHours();
    this._handleMinuteRoleover();
  }

  _handleNegativeMinutes() {
    while (this.minutes < 0) {
      this.minutes = this._getRolledUpMinutes();
      this.hours--;
    }
  }

  _handleNegativeHours() {
    while (this.hours < 0) this.hours = this._getRolledUpHours();
  }

  _handleMinuteRoleover() {
    let newMinutes = this.minutes - this._MINUTES;
    while (newMinutes >= 0) {
      this.hours++;
      newMinutes -= this._MINUTES;
    }
  }

  _getRolledUpMinutes() {
    if (this.minutes < -this._MINUTES) return this.minutes + this._MINUTES;
    return (this._MINUTES + this.minutes) % this._MINUTES;
  }

  _getRolledUpHours() {
    return (this._HOURS + this.hours) % this._HOURS;
  }

  _paddedHours() {
    return this._padded(this.hours, this._HOURS);
  }

  _paddedMinutes() {
    return this._padded(this.minutes, this._MINUTES);
  }

  _padded(time, modulo) {
    return (time % modulo).toString().padStart(2, "0");
  }
}

module.exports = {
  at: (hours, minutes) => new Clock(hours, minutes)
};

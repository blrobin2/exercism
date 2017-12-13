module.exports = class Gigasecond {
  constructor(date) {
    this.giga = 1000000000 * 1000;
    this._date = new Date(date.valueOf() + this.giga);
  }

  date() {
    return this._date;
  }
}
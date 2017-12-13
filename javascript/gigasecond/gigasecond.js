module.exports = class Gigasecond {
  constructor(date) {
    this.giga = Math.pow(10, 12);
    this._date = new Date(date.valueOf() + this.giga);
  }

  date() {
    return this._date;
  }
};

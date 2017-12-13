module.exports = class Gigasecond {
  constructor(date) {
    this.giga = 1000000000;
    this._date = new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000));
    this._date.setSeconds(date.getSeconds() + this.giga);
  }

  date() {
    return this._date;
  }
}
module.exports = class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.ONE_EARTH_YEAR_IN_SECONDS = 31557600;
    this.EARTH_YEAR_TO_MERCURY_YEAR = 0.2408467;
    this.EARTH_YEAR_TO_VENUS_YEAR = 0.61519726;
    this.EARTH_YEAR_TO_MARS_YEAR = 1.8808158;
    this.EARTH_YEAR_TO_JUPITER_YEAR = 11.862615;
    this.EARTH_YEAR_TO_SATURN_YEAR = 29.447498;
    this.EARTH_YEAR_TO_URANUS_YEAR = 84.016846;
    this.EARTH_YEAR_TO_NEPTUNE_YEAR = 164.79132;
  }

  onEarth() {
    return this._convert();
  }

  onMercury() {
    return this._convert(this.EARTH_YEAR_TO_MERCURY_YEAR);
  }

  onVenus() {
    return this._convert(this.EARTH_YEAR_TO_VENUS_YEAR);
  }

  onMars() {
    return this._convert(this.EARTH_YEAR_TO_MARS_YEAR);
  }

  onJupiter() {
    return this._convert(this.EARTH_YEAR_TO_JUPITER_YEAR);
  }

  onSaturn() {
    return this._convert(this.EARTH_YEAR_TO_SATURN_YEAR);
  }

  onUranus() {
    return this._convert(this.EARTH_YEAR_TO_URANUS_YEAR);
  }

  onNeptune() {
    return this._convert(this.EARTH_YEAR_TO_NEPTUNE_YEAR);
  }

  _convert(fromToYear = 1) {
    return this._roundYear(this._secondsToEarthYear() / fromToYear);
  }

  _roundYear(year) {
    return parseFloat(year.toFixed(2));
  }

  _secondsToEarthYear() {
    return this.seconds / this.ONE_EARTH_YEAR_IN_SECONDS;
  }
}
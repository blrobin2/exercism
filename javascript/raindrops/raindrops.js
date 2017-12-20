module.exports = class Raindrops {
  convert(number) {
    return this._checkFactors(number) || number.toString();
  }

  _checkFactors(number) {
    let conversion = "";
    if (this._factorOf3(number)) conversion += "Pling";
    if (this._factorOf5(number)) conversion += "Plang";
    if (this._factorOf7(number)) conversion += "Plong";
    return conversion;
  }

  _factorOf3(number) {
    return number % 3 === 0;
  }

  _factorOf5(number) {
    return number % 5 === 0;
  }

  _factorOf7(number) {
    return number % 7 === 0; 
  }
};

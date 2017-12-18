module.exports = class PhoneNumber {
  constructor(number) {
    this._CORRECT_PHONE_NUMBER_LENGTH = 10;
    this._US_COUNTRY_CODE = "1";
    this._VALID_AREA_CODE_START = /[2-9]/;
    this._VALID_EXCHANGE_CODE_START = /[2-9]/;
    this._START_OF_EXCHANGE_CODE = 3;
    this._numberToValidate = number;
    this._number = this._getValidatedNumber();
  }

  number() {
    return this._number;
  }

  _getValidatedNumber() {
    this._stripEverythingButNumbers();
    if (this._isInvalidNumber()) return null;
    if (this._hasCorrectCountryCode()) this._stripCountryCode();
    return this._numberToValidate;
  }

  _stripEverythingButNumbers() {
    this._numberToValidate = this._numberToValidate.replace(/\D/g, "");
  }

  _isInvalidNumber() {
    return (
      this._smallerThanCorrectLength() ||
      this._incorrectCountryCode() ||
      this._invalidAreaCode() ||
      this._invalidExchangeCode()
    );
  }

  _hasCorrectCountryCode() {
    return (
      this._numberToValidate.length > this._CORRECT_PHONE_NUMBER_LENGTH &&
      this._numberToValidate.charAt() === this._US_COUNTRY_CODE
    );
  }

  _stripCountryCode() {
    this._numberToValidate = this._numberToValidate.substring(1);
  }

  _smallerThanCorrectLength() {
    return this._numberToValidate.length < this._CORRECT_PHONE_NUMBER_LENGTH;
  }

  _incorrectCountryCode() {
    return (
      this._containsCountryCode() &&
      this._numberToValidate.charAt() !== this._US_COUNTRY_CODE
    );
  }

  _invalidAreaCode() {
    return (
      this._isCorrectLength() &&
      !this._VALID_AREA_CODE_START.test(this._numberToValidate.charAt())
    );
  }

  _invalidExchangeCode() {
    return (
      this._isCorrectLength() &&
      !this._VALID_EXCHANGE_CODE_START.test(
        this._numberToValidate.charAt(this._START_OF_EXCHANGE_CODE)
      )
    );
  }

  _containsCountryCode() {
    return this._numberToValidate.length > this._CORRECT_PHONE_NUMBER_LENGTH;
  }

  _isCorrectLength() {
    return this._numberToValidate.length === this._CORRECT_PHONE_NUMBER_LENGTH;
  }
};

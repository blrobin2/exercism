module.exports = class Bob {
  hey(greeting) {
    const trimmedGreeting = greeting.trim();
    if (!trimmedGreeting) {
      return "Fine. Be that way!";
    }
    if (this._isAllUpperCase(trimmedGreeting)) {
      return "Whoa, chill out!";
    }
    if (trimmedGreeting.endsWith("?")) {
      return "Sure.";
    }
    return "Whatever.";
  }

  _isAllUpperCase(greeting) {
    return greeting.match(/[A-Z]/g) && greeting === greeting.toUpperCase();
  }
};

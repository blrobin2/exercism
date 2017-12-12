module.exports = class Pangram {
  constructor(string) {
    this.string = string;
    this.alphabet = new Set([...'abcdefghijklmnopqrstuvwxyz']);
  }

  isPangram() {
    return new Set(this. _onlyAlphaLetters()).size === this.alphabet.size;
  }

  _onlyAlphaLetters() {
    return [...this.string.toLowerCase()]
      .filter(letter => this.alphabet.has(letter));
  }
}
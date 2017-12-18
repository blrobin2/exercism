module.exports = class BeerSong {
  constructor() {
    this.FIRST_VERSE = 99;
    this.LAST_VERSE = 0;
  }

  sing(fromVerse, toVerse = this.LAST_VERSE) {
    let song = [];
    for (let currVerse = fromVerse; currVerse >= toVerse; currVerse--) {
      song.push(this.verse(currVerse));
    }
    return song.join("\n");
  }

  verse(num) {
    return (
      `${this._firstLine(num)} on the wall, ${this._primaryLine(num)}.\n` +
      `${this._secondaryLine(num)}, ` +
      `${this._primaryLine(this._getNextNumber(num))} on the wall.\n`
    );
  }

  _firstLine(num) {
    return this._uppercase(this._primaryLine(num));
  }

  _primaryLine(num) {
    return `${this._bottleCount(num)} ${this._pluralizeBottle(num)} of beer`;
  }

  _secondaryLine(number) {
    return this._isLastVerse(number)
      ? "Go to the store and buy some more"
      : `Take ${this._howManyToTakeDown(number)} down and pass it around`;
  }

  _getNextNumber(number) {
    return this._isLastVerse(number) ? this.FIRST_VERSE : number - 1;
  }

  _uppercase(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  _bottleCount(number) {
    return this._isLastVerse(number) ? "no more" : number.toString();
  }

  _pluralizeBottle(number) {
    return number === 1 ? "bottle" : "bottles";
  }

  _howManyToTakeDown(number) {
    return number === 1 ? "it" : "one";
  }

  _isLastVerse(number) {
    return number === this.LAST_VERSE;
  }
};

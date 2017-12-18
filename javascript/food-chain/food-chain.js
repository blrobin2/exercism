module.exports = class FoodChain {
  constructor() {
    this._foods = {
      1: {
        food: "fly",
        phrase: "",
        swallow: "I don't know why she swallowed the fly. Perhaps she'll die.\n"
      },
      2: {
        food: "spider",
        phrase: "It wriggled and jiggled and tickled inside her.\n",
        swallow: "She swallowed the spider to catch the fly.\n"
      },
      3: {
        food: "bird",
        phrase: "How absurd to swallow a bird!\n",
        swallow:
          "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n"
      },
      4: {
        food: "cat",
        phrase: "Imagine that, to swallow a cat!\n",
        swallow: "She swallowed the cat to catch the bird.\n"
      },
      5: {
        food: "dog",
        phrase: "What a hog, to swallow a dog!\n",
        swallow: "She swallowed the dog to catch the cat.\n"
      },
      6: {
        food: "goat",
        phrase: "Just opened her throat and swallowed a goat!\n",
        swallow: "She swallowed the goat to catch the dog.\n"
      },
      7: {
        food: "cow",
        phrase: "I don't know how she swallowed a cow!\n",
        swallow: "She swallowed the cow to catch the goat.\n"
      },
      8: {
        food: "horse",
        phrase: "She's dead, of course!\n"
      }
    };
    this._verse = 0;
  }

  verses(startVerse, endVerse) {
    let verses = "";
    for (this._verse = startVerse; this._verse <= endVerse; this._verse++)
      verses += this.verse() + "\n";
    return verses;
  }

  verse(verseNumber = null) {
    if (verseNumber) this._verse = verseNumber;
    return this._buildVerse();
  }

  _buildVerse() {
    let verse = this._getFirstLine();
    if (this._isLastVerse()) return verse;
    return verse + this._getFoodChain();
  }

  _getFirstLine() {
    return `I know an old lady who swallowed a ${this._getFood()}.
${this._getPhrase()}`;
  }

  _isLastVerse() {
    return this._verse === Object.keys(this._foods).length;
  }

  _getFoodChain() {
    let verse = "";
    for (let countdown = this._verse; countdown > 0; countdown--)
      verse += this._getSwallowReason(countdown);
    return verse;
  }

  _getFood() {
    return this._foods[this._verse].food;
  }

  _getPhrase() {
    return this._foods[this._verse].phrase;
  }

  _getSwallowReason(countdown) {
    return this._foods[countdown].swallow;
  }
};

module.exports = class DnaTranscriber {
  toRna(input) {
    return input
      .split("")
      .map(this.translateDnaLetterToRnaLetter)
      .join("");
  }

  translateDnaLetterToRnaLetter(letter) {
    switch (letter) {
      case "G":
        return "C";
      case "A":
        return "U";
      case "T":
        return "A";
      case "C":
        return "G";
      default:
        throw Error("Invalid input");
    }
  }
};

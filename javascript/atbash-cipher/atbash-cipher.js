function convertCharacter(character) {
  return isNumber(character) ? character : convertLetter(character);
}

function isNumber(character) {
  return Number.isInteger(parseInt(character));
}

function convertLetter(character) {
  const A_CODE = "a".charCodeAt();
  const Z_CODE = "z".charCodeAt();
  const thisCode = character.toLowerCase().charCodeAt();
  return String.fromCharCode(Z_CODE - (thisCode - A_CODE));
}

function removeSpecialCharacters(character) {
  return /[^\s\,\.]/.test(character);
}

function addSpacing(output, character, index) {
  return output + (shouldAddSpace(index) ? " " + character : character);
}

function shouldAddSpace(index) {
  const ADD_SPACE_AT = 5;
  return index > 0 && index % ADD_SPACE_AT === 0;
}

module.exports = {
  encode(string) {
    return string
      .split("")
      .filter(removeSpecialCharacters)
      .map(convertCharacter)
      .reduce(addSpacing, "");
  }
};

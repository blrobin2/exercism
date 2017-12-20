const romanNumerals = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

module.exports = function toRoman(number) {
  if (number < 1) return "";
  for (let currentNumeral = number; currentNumeral > 0; currentNumeral--)
    if (romanNumerals[currentNumeral])
      return romanNumerals[currentNumeral] + toRoman(number - currentNumeral);
};

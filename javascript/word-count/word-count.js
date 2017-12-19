module.exports = class Words {
  count(words) {
    return words
      .split(/\s|\,/g)
      .map(word => word.replace(/[^A-z0-9\']|\^|[\u00C0-\u017F]/g, ""))
      .filter(word => word.length)
      .reduce((counts, word) => {
        const lowercase = word.toLowerCase();
        if (counts[lowercase]) {
          counts[lowercase]++;
        } else {
          counts[lowercase] = 1;
        }
        return counts;
      }, {});
  }
}
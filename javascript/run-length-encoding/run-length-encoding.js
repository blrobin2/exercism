module.exports = {
  /**
   * Grabs character as long as it's the same character, and
   * last instance of character. That \1+ is what gives us the
   * pair of string run and last instance of character. MAGIC!
   * 
   * @param {String} string 
   */
  encode: string =>
    string.replace(/([A-z])\1+/g, (run, char) => run.length + char),
  /**
   * Grabs one or more numbers followed by a single letter
   * Ignores first match, which is the whole group, and goes
   * to the found number and character.
   *
   * @param {String} string
   */
  decode: string =>
    string.replace(/(\d+)([A-z])/g, (_, runLength, char) =>
      char.repeat(runLength)
    )
};

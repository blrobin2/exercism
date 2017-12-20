function circularBuffer(bufferSize) {
  let buffer = [];

  const isEmptyBuffer = () => !buffer.length;
  const isFullBuffer = () => buffer.length === bufferSize;
  const bufferIsNotFull = () => buffer.length !== bufferSize;

  function shiftBufferForNewValue(newValue) {
    let newBuffer = [];
    for (let i = 1; i < buffer.length; i++) newBuffer[i - 1] = buffer[i];
    return newBuffer.concat(newValue);
  }

  return {
    read() {
      if (isEmptyBuffer()) throw new bufferEmptyException();
      return buffer.shift();
    },

    write(value) {
      if (!value) return;
      if (isFullBuffer()) throw new bufferFullException();
      buffer.push(value);
    },

    clear() {
      buffer = [];
    },

    forceWrite(value) {
      if (bufferIsNotFull()) return this.write(value);
      buffer = shiftBufferForNewValue(value);
    }
  };
}

const bufferEmptyException = Error;
const bufferFullException = Error;

module.exports = {
  circularBuffer,
  bufferEmptyException,
  bufferFullException
};

module.exports = {
  for: function(number) {
    let factors = [];

    if (number === 1) {
      return factors;
    }

    if (number < 4) {
      factors.push(number);
      return factors;
    }

    let numberToEvaluate = number;
    let i;
    NEXTPRIME: for (i = 2; i < numberToEvaluate; i++) {
      if (!Number.isInteger(numberToEvaluate / i)) {
        continue NEXTPRIME;
      }
      numberToEvaluate = numberToEvaluate / i;
      while (Number.isInteger(numberToEvaluate)) {
        factors.push(i);
        if (isPrime(numberToEvaluate, i)) {
          factors.push(numberToEvaluate);
          continue NEXTPRIME;
        }
        numberToEvaluate = numberToEvaluate / i;
      }
    }

    return factors;
  }
};


function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
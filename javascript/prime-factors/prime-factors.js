module.exports = {
  for: num => {
    let numberToCheck = Math.floor(num);
    let factors = [];
    let doLoop = numberToCheck > 1;
    let root, x;

    while (doLoop) {
      root = Math.sqrt(numberToCheck);
      x = 2;
      if (numberToCheck % x !== 0) {
        x = 3;
        while (numberToCheck % x && (x += 2) < root);
      }
      x = x > root ? numberToCheck : x;
      factors.push(x);
      doLoop = x !== numberToCheck;
      numberToCheck /= x;
    }

    return factors;
  }
};

module.exports = class Sieve {
  constructor(number) {
    this.number = number;
    this.primes = this._calculatePrimes();
  }

  _calculatePrimes() {
    const primesObject = this._crossOutNumbers();
    return this._pullPrimesFromObject(primesObject);
  }

  _crossOutNumbers() {
    const potentialPrimes = this._generateIntegersUpTo();
    for (let number = 2; number <= Math.sqrt(this.number); number++)
      if (potentialPrimes[number])
        this._crossOutCompositesFor(number, potentialPrimes);
    return potentialPrimes;
  }

  _generateIntegersUpTo(number) {
    let integerObject = {};
    for (let number = 2; number <= this.number; number++)
      integerObject[number] = true;
    return integerObject;
  }

  _crossOutCompositesFor(number, potentialPrimes) {
    for (
      let k = 0, j = this._getNextComposite(number, k);
      j <= this.number;
      k++, j = this._getNextComposite(number, k)
    )
      potentialPrimes[j] = false;
  }

  _getNextComposite(prime, counter) {
    return Math.pow(prime, 2) + prime * counter;
  }

  _pullPrimesFromObject(primesObject) {
    const primes = [];
    for (let num in primesObject)
      if (primesObject[num]) primes.push(parseInt(num));
    return primes;
  }
};

const ArgumentError = Error;

const operations = {
  plus: (sum, number) => sum + number,
  minus: (difference, number) => difference - number,
  multiplied: (product, number) => product * number,
  divided: (quotient, number) => quotient / number
};

function getNumbersFromWordQuestion(question) {
  return question
    .split(" ")
    .map(x => parseInt(x))
    .filter(x => !isNaN(x));
}

function getOperationsFromWordQuestion(question) {
  return question
    .split(" ")
    .map(x => operations[x])
    .filter(x => x !== undefined);
}

function reduceOperations(operationsToUse, numbers) {
  if (operationsToUse.length === 0) throw new ArgumentError();
  return operationsToUse.reduce(
    (result, operation, index) =>
      result === 0
        ? operation(numbers[index], numbers[index + 1])
        : operation(result, numbers[index + 1]),
    0
  );
}

function WordProblem(question) {
  const numbers = getNumbersFromWordQuestion(question);
  const operationsToUse = getOperationsFromWordQuestion(question);

  return {
    answer: reduceOperations.bind(null, operationsToUse, numbers)
  };
}

module.exports = {
  WordProblem,
  ArgumentError
};

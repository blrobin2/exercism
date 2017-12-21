module.exports = function accumulate(list, operation) {
  const newList = [];
  for (let elem of list) newList.push(operation(elem));
  return newList;
}
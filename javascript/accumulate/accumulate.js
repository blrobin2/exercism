module.exports = function accumulate(list, operation) {
  if (!list.length) return list;
  const newList = [];
  for (let elem of list) newList.push(operation(elem));
  return newList;
}
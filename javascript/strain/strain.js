module.exports = {
  keep(list, predicate) {
    return this._filter(list, predicate);
  },

  discard(list, predicate) {
    return this._filter(list, elem => !predicate(elem));
  },

  _filter(list, predicate) {
    const newList = [];
    for (let elem of list) if (predicate(elem)) newList.push(elem);
    return newList;
  }
};

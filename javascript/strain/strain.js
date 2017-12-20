module.exports = { 
  keep(list, predicate) {
    return this._filter(list, predicate);
  },

  discard(list, predicate) {
    return this._filter(list, this._not(predicate));
  },

  _filter(list, predicate) {
    const newList = [];
    for (let i = 0; i < list.length; i++)
      if (predicate(list[i])) newList.push(list[i]);
    return newList;
  },

  _not(predicate) {
    return function() {
      return !predicate.apply(null, arguments);
    }
  }
};
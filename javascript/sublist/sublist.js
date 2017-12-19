module.exports = class List {
  constructor(list = []) {
    this.list = this._makeListComperable(list);
    this._EQUAL = "EQUAL";
    this._SUBLIST = "SUBLIST";
    this._SUPERLIST = "SUPERLIST";
    this._UNEQUAL = "UNEQUAL";
    this._otherList;
  }

  _makeListComperable(list) {
    return this._removeSquareBrackets(JSON.stringify(list));
  }

  _removeSquareBrackets(string) {
    return string.replace(/\[(.*)\]/, (_, list) => list);
  }

  compare(otherList) {
    this._otherList = otherList.list;
    return this._getEquality();
  }

  _getEquality() {
    if (this._areEqual()) return this._EQUAL;
    if (this._isSublist()) return this._SUBLIST;
    if (this._isSuperlist()) return this._SUPERLIST;
    return this._UNEQUAL;
  }

  _areEqual() {
    return this._listsAreIdentical();
  }

  _isSublist() {
    return this._onlyThisListIsEmpty() || this._thisListIsInsideSecond();
  }

  _isSuperlist() {
    return this._onlyOtherListIsEmpty() || this._otherListIsInsideThisList();
  }

  _listsAreIdentical() {
    return this.list === this._otherList;
  }

  _onlyThisListIsEmpty() {
    return !this.list.length && this._otherList.length;
  }

  _onlyOtherListIsEmpty() {
    return this.list.length && !this._otherList.length;
  }

  _thisListIsInsideSecond() {
    return this._otherList.includes(this.list);
  }

  _otherListIsInsideThisList() {
    return this.list.includes(this._otherList);
  }
};

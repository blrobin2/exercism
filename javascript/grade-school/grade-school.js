const _roster = new WeakMap();

module.exports = class School {
  constructor() {
    _roster.set(this, {});
  }

  roster() {
    return _roster.get(this);
  }

  add(name, grade) {
    const roster = this._getRosterForGrade(grade).slice();
    roster.push(name);
    this._setRosterForGrade(roster.sort(), grade);
  }

  grade(grade) {
    return this._getRosterForGrade(grade);
  }

  _getRosterForGrade(grade) {
    return _roster.get(this)[grade] || [];
  }

  _setRosterForGrade(roster, grade) {
    _roster.get(this)[grade] = roster;
  }
};

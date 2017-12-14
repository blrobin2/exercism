module.exports = class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    for (let i = 0; i < list.values.length; i++) {
      this.values[this.values.length] = list.values[i];
    }
    return this;
  }

  concat(list) {
    return this.append(list);
  }

  filter(func) {
    let list = this.values;
    for (let i = 0; i < list.length; i++) {
      if (!func(list[i])) {
        list.splice(i, 1);
      }
    }
    this.values = list;
    return this;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.values.length; i++) {
      count++;
    }
    return count;
  }

  map(func) {
    let mappedValues = [];
    for (let i = 0; i < this.values.length; i++) {
      mappedValues[i] = func(this.values[i]);
    }
    this.values = mappedValues;
    return this;
  }

  foldl(func, initialValue) {
    let value = initialValue;
    for (let i = 0; i < this.values.length; i++) {
      value = func(this.values[i], value);
    }
    return value;
  }

  foldr(func, initialValue) {
    let value = initialValue;
    for (let i = this.values.length - 1; i >= 0; i--) {
      value = func(this.values[i], value);
    }
    return value;
  }

  reverse() {
    let newList = [];
    for (let i = 0; i < this.values.length; i++) {
      newList[this.values.length - i - 1] = this.values[i];
    }
    this.values = newList;
    return this;
  }
};

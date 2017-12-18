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
    for (let i = 0; i < this.values.length; i++) {
      if (!func(this.values[i])) {
        this.values.splice(i, 1);
      }
    }
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
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = func(this.values[i]);
    }
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
    const existingValues = this.values.slice();
    for (
      let i = 0, n = existingValues.length - 1;
      i < this.values.length;
      i++, n--
    ) {
      this.values[i] = existingValues[n];
    }
    return this;
  }
};

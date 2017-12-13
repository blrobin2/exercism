module.exports = class Matrix {
  constructor(matrixString) {
    this.rows = matrixString.split("\n").map(rowString => rowString.split(' ').map(x => parseInt(x)));

    this.columns = [[],[1903, 3, 4]];
    
  }
}
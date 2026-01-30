// In Javascript, it doesn’t matter how many times you use the keyword “var”. 
// If it’s the same name in the same function, you are pointing to the same variable

function printMatrix1(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];

    for (var i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
}

function printMatrix2(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      let element = line[i];
      console.log(element);
    }
  }
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

printMatrix1(matrix);
console.log("==================================");
printMatrix2(matrix);

function mengelompokkanAngka(arr) {
  var a = [];
  var tampung1 = [];
  var tampung2 = [];
  var tampung3 = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      tampung3.push(arr[i]);
    }else if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
      tampung1.push(arr[i])
    } else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
      tampung2.push(arr[i]);
    }
  }
  a.push(tampung1);
  a.push(tampung2);
  a.push(tampung3);

  return a;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

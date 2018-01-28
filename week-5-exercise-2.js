function changeMe(arr) {
  for (var i = 0; i < arr.length; i++) {
      var object = {};
      object.firstName = arr[i][0];
      object.lastName = arr[i][1];
      object.gender = arr[i][2];
        if (isNaN(arr[i][3])) {
        object.age = 'Invalid Birth Year';
      } else {
      object.age = 2018 - arr[i][3];
      }

      console.log((i + 1) + '. ' + arr[i][0] +' ' + arr[i][1] + ' :')
      console.log(object);
  }

}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""

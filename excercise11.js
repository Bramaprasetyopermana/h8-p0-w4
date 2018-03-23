function changeMe(arr) {
  var result=[]
  var tahun=2018
  for (var i = 0; i < arr.length; i++) {
    var dataObject={}
    // console.log((i+1)+' '+ arr[i][0] + arr[i][1]);
    dataObject.firstName=arr[i][0]
    dataObject.lastName=arr[i][1]
    dataObject.gender=arr[i][2]
    dataObject.age= arr[i][3]
    if (arr[i][3]===undefined) {
      dataObject.age = 'Invalid Birth Year'
    }
    else {
      dataObject.age= tahun - arr[i][3]
    }
    result.push(dataObject)
  }
  console.log(result);
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
changeMe([]); // ""

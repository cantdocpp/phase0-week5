function shoppingTime(memberId, money) {
  // you can only write your code here!
  var firstMoney = money;
  var a = [];
  var b = [];
  if (memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  } else if (memberId === undefined && money === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else {
    var array = [1500000, 500000, 250000, 175000, 50000];
    for (var i = 0; i < array.length; i++) {
      if (array[i] <= money) {
        money = money - array[i]
        a.push(array[i]);
      }
    }
  }
      b.push(money);
      b.toString();

  for (var j = 0; j < a.length; j++) {
    if (a[j] == 1500000) {
      a[j] = 'Sepatu brand Stacattu';
    } else if (a[j] == 500000) {
      a[j] = 'Baju brand Zoro';
    } else if (a[j] == 250000) {
      a[j] = 'Baju brand H&N';
    } else if (a[j] == 175000) {
      a[j] = 'Sweater brand Uniklooh';
    } else if (a[j] == 50000) {
      a[j] = 'Casing Handphone';
    }
  }
    var myObj = {};
    myObj.memberId = memberId;
    myObj.money = firstMoney;
    myObj.listPurchased = a;
    myObj.changeMoney = parseInt(b);

    return myObj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

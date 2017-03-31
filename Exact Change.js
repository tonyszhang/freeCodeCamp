// Copyright 2017 Tony S. Zhang, all rights reserved

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  // Here is your change, ma'am.
  if(totalCid(cid) == change) {return "Closed";}

  var arr = [];
  var result = [];
  var value = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var quant = value.map(function(val,ind){return Math.round(cid[ind][1]/val);});
  var left = change;

  for(var i = cid.length - 1; i >= 0; i--) {
    if(left < value[i] || quant[i] === 0) {
      arr.unshift(0);
    }
    else {
      arr.unshift(Math.min(Math.floor(left/value[i]),quant[i]));
    }
    left -= arr[0]*value[i];
    left = Math.round(left*100)/100;
  }

  if(left > 0) {return "Insufficient Funds";}

  for(var j = arr.length - 1; j >= 0; j--) {
    if(arr[j] !== 0) {
      result.push([cid[j][0], arr[j]*value[j]]);
    }
  }

  return result;
}

function totalCid(cid) {
  var sum = 0;
  for(var i = 0; i < cid.length; i++) {
    sum += cid[i][1];
  }
  return sum;
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
console.log(
	checkCashRegister(0, 151.04, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 200.00]])
)

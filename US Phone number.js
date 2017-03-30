// Copyright 2017 Tony S. Zhang, all rights reserved

function telephoneCheck(str) {
  // Good luck!
  var arr = str.split("");
  if(!arr.every(allowed)) {return false;}
  if(nDigits(arr)!=10 && nDigits(arr)!=11) {return false;}
  if(nDigits(arr)==11 && arr[0]!=1) {return false;}
  if(!bracketBalanced(arr)) {return false;}
  return true;
}


function allowed(char) {
// Can have: " ", "-", "(", ")", "number"; must be 7 or 8 numbers.
  if(/ /.test(char) || /-/.test(char) || /\(/.test(char) || /\)/.test(char) || /\d/.test(char)) {
    return true;
  }
  else {return false;}
}

function nDigits(arr) {
  var tot = 0;
  for(var i = 0; i < arr.length; i++){
    if(/\d/.test(arr[i])){
      tot++;
    }
  }
  return tot;
}

function bracketBalanced(arr) {
  iLeft = arr.findIndex(function(val){return /\(/.test(val);});
  iRight = arr.findIndex(function(val){return /\)/.test(val);});
  if(iLeft == -1 && iRight == -1) {return true;}
  else if(iLeft == -1 && iRight != -1) {return false;}
  else if(iLeft != -1 && iRight == -1) {return false;}
  else if(iRight - iLeft == 4) {return true;}
  else return false;
}

console.log(
  telephoneCheck("(6505552368)")
);


/*better solution

function telephoneCheck(str) {

   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

   return regex.test(str);
}

*/

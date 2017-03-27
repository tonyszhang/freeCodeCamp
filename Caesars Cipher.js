// Copyright 2017 Tony S. Zhang, all rights reserved

function rot13(str) { // LBH QVQ VG!

  var code = 0;

  var result = [];

  for(i = 0; i < str.length; i++){

    code = str.charCodeAt(i);

    if(code <= 77 && code >= 65){code = code + 13;}
    else if (code <= 90 && code >= 78){code = code - 13;}

    result.push(String.fromCharCode(code));

  }

  return result.join("");
}

// Change the inputs below to test
console.log(
  rot13("LBH QVQ VG")
);

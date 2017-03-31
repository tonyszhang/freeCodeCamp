// Copyright 2017 Tony S. Zhang, all rights reserved


function sumPrimes(num) {
  var sum = 0;

  for(var i = 0; i <= num; i++){

    if(isPrime(i)){
      sum += i;
    }
  }

  return sum;
}

function isPrime(num) {
  var nDivisors = 0;
  for(var i = 1; i <= num; i++) {
    if(num%i === 0) {nDivisors++;}
  }
  return (nDivisors == 2)? true:false ;
}


console.log(sumPrimes(977))

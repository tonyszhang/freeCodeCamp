// Copyright 2017 Tony S. Zhang, all rights reserved

function convertToRoman(num) {

	var M = Math.floor(num/1000);
	var rM = num%1000;
	var D = Math.floor(rM/500);
	var rD = rM%500;
	var C = Math.floor(rD/100);
	var rC = rD%100;
	var L = Math.floor(rC/50);
	var rL = rC%50;
	var X = Math.floor(rL/10);
	var rX = rL%10;
	var V = Math.floor(rX/5);
	var I = rX%5;

	var arr = [M,D,C,L,X,V,I];
	var ref = ['M','D','C','L','X','V','I'];
	var str = [];

	for(i = 0; i < 7; i++){
		for(j = 0; j < arr[i]; j++){
			if(arr[i] > 3){
				if(arr[i] == 4 && arr[i-1] == 1){
					str.pop();
					str.push(ref[i],ref[i-2]);
					break;
				}
				else{
					str.push(ref[i],ref[i-1]);
					break;
				}
			}
			else {str.push(ref[i]);}
		}
	}
	return str.join("");
}

console.log(convertToRoman(2001));

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// The solution

function maps(arr){
	var doubledArray = [];
	
	for (var i = 0; i < arr.length; i++) {
	  doubledArray.push(arr[i] * 2);
	}
	
	return doubledArray;
  }
function positiveSum(arr) {
	return arr.reduce((accumulator, currentValue) => {
	  if (currentValue > 0) {
		return accumulator + currentValue;
	  } else {
		return accumulator;
	  }
	}, 0);
  }
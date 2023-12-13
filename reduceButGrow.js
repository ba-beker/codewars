function grow(arr) {
  // Check if the array is non-empty
  if (arr.length === 0) {
    return undefined; // or any other appropriate value for an empty array
  }

  // Use the reduce function to multiply the values together
  const result = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

  return result;
}

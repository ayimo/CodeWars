function differenceInAges(ages){
  const min = Math.min(...ages);
  const max = Math.max(...ages);

  return [min, max, max-min];
}

// Return a new array with
// [youngest age, oldest age, difference
// between the youngest and oldest age].

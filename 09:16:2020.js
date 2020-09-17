function isDivisible(n, x, y) {
  if (n % x*y || n % x || n % y){
    return false
  }else{
    return true
  }
}

// Create a function that checks if
// a number n is divisible by two numbers
// x AND y. All inputs are positive, non-zero digits.

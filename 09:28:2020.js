//The first integer is the minimum value, 
// the second is the maximum of the range and
// the third is the step. (min < max)

function generateRange(min, max, step){
  let a = [];
  for(let i = min; i <= max; i += step){
    a.push(i) //have to actually put the numbers into the array
  }
  return a
}

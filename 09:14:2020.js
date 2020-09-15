// Write a function that receives the speed (in cm/s)
// of a petal as input, and returns the time
//it takes for that petal to reach the ground from the same branch.

function sakuraFall(v) {
  const speed = v;
  const distance = 400;
  const time = distance/speed;

  if (time < 0){
    return 0
  }else if (time === Infinity){
    return 0
  }else{
    return time
  }
}

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

function sc(floor){
  let scream = "Aa~ "
  if (floor < 2 ){
    return ''
  }else if (floor <= 6){
    return scream.repeat(floor - 1) + "Pa! " + "Aa!"
  }else if (floor > 6){
    return scream.repeat(floor - 1) + "Pa!"
  }
}

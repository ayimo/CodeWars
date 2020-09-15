function solution(a, b){
  let space = ""
  if (a.length < b.length){
    return space.concat(a,b,a)
  }else if (a.length > b.length){
    return space.concat(b,a,b)
  }
}

// Given 2 strings, a and b, return a string of the
// form short+long+short, with the shorter
// string on the outside and the longer string on the inside.

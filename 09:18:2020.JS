function arrayMadness(a, b) {
  let sum = 0

   for (var i = 0; i < a.length; i++){
     sum += a[i] * a[i]
   }

   for (var i = 0; i < b.length; i++){
     sum -= b[i] * b[i] * b[i]
   }
    return sum > 0
}


//   let array = (a, b)
//  for (var i = 0; i < array.length; i++) {
//     if(Math.pow(a[i], 2) > Math.pow(b[i], 3)){
//     return true
//   }else{
//     return false
//   }
// }

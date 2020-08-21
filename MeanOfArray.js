function getAverage(marks){
  // loop for "marks" -- googlehelped
  var total = 0;
  for(var i = 0; i < marks.length; i++){
    total += marks[i];
  }
    /* return what the problem is asking for (the integer) */
  return Math.floor(total / marks.length);
}

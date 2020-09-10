var scoreToTally = function(score){
  let strIng = "";
  for (let i = score; 0 < i; i -= 5 ){
    if(i === 1) strIng += 'a';
    if(i === 2) strIng += 'b';
    if(i === 3) strIng += 'c';
    if(i === 4) strIng += 'd';
    if(i >= 5) strIng += 'e <br>';
  }
  return strIng;
};

//My tally mark font uses the letters
//a, b, c, d, e to represent tally marks
//for 1, 2, 3, 4, 5, respectively.
//I want a space and line break (<br>)
//after each completed tally (5).

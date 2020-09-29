function drawStairs(n) {
  let stair = "I"
  if(n > 1){
    for(let i = 1; i <= n - 1; i++)
      stair += "\n" + " ".repeat(i) + "I"
  }
  return stair
}

//Given a number n, draw stairs using the letter "I",
//n tall and n wide, with the tallest in the top left.

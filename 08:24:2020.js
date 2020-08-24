//The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
  const area = l * w
  const peri = l+w+l+w
  if (l == w) {
    return area
  }else {
    return peri
  }
};

//so exciting it worked

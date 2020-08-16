//Training JS #14: Methods of Number object--toString() and toLocaleString()

function colorOf(r, g, b) {
  let R = r.toString(16)
  let G = g.toString(16)
  let B = b.toString(16)

  if (r < 16) {
    R = '0' + R
  }
  if (g < 16) {
     G = '0' + G
  }
  if (b < 16) {
    B = '0' + B
  }

  return '#' + R + G + B
}

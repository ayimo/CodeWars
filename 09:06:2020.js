//For Twins: 2. Math operations

function iceBrickVolume(radius, bottleLength, rimLength) {
  return Math.round((2 * Math.pow(radius, 2) * (bottleLength - rimLength)))
}

//why was it 2 and not pi? -- finding the volume of a brick in a cylander

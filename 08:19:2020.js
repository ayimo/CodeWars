//Debug the code-- converting the Celsius

function weatherInfo (temp) {
  var c  = convertToCelsius(temp);
  if (c <= 0)
    return (c + " is freezing temperature");
  else
    return (c + " is above freezing temperature");
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9);
  return celsius;
}

//remember to check if you've misspelled "temperature" :|

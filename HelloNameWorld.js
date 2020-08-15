//Hello Name/World

function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!'; /*Targets Capital letter and THEN rest of the lowercase for name, bc that's what we wanted too*/
  } else {
    return "Hello, World!";
  }
}

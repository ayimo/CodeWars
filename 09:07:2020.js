function correctTail(body, tail) {

  var sub = body.substr(body.length-(tail.length));

  if (sub === tail) {
    return true;
  }
  else {
    return false;
  }
}

//lots of typos..

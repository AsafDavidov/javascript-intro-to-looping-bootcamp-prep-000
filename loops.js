function forLoop(array){
  for(let i = 0; i < 25; i++){
    var outputString;
    if (i === 1){
      outputString = "I am 1 strange loop.";
    }
    else{
      outputString = "I am " + i + " strange loops.";
    }
    array[array.length] = outputString;
  }
  return array;
}
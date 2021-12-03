// Desafio 1
function compareTrue(valueTrue, valueFalse) {
  
    
  if (valueFalse === false &&  valueFalse === false) {
    
    return false;

  } else if (valueTrue === true &&  valueTrue === true) {
    
    return true;

  }else{

    return false;

  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  
  return (base * height)/2;

  // seu código aqui
}

// Desafio 3
function splitSentence(text) {

  let breakText = text.split(' ');

  return breakText;

  // seu código aqui
}

// Desafio 4
function concatName(arrayNames) {

  let firstName = arrayNames.shift();
  let lastName = arrayNames[arrayNames.length - 1];

  let nameFilter = lastName + ", " + firstName;

  return nameFilter;

  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {

  let pontos = wins*3 + ties;

  return pontos;

  // seu código aqui
}

// Desafio 6
function highestCount(arrayNumbers) {

  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    let i = index;
    if (Math.max.apply(Math, arrayNumbers) === arrayNumbers[i] ) {
      count++;
    }
  }
  return count;
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

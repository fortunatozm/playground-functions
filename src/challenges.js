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

  let firstName = arrayNames[0];
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
function catAndMouse(mouse, cat1, cat2) {

  let firstCat = cat1 - mouse;
  let secondCat = cat2 - mouse;


  if (firstCat < 0 ) {
    firstCat = firstCat * (-1);
  }

  if (secondCat < 0 ) {
    secondCat = secondCat * (-1);
  }

  if (secondCat < firstCat) {
    return "cat2";
  }
  
  if (secondCat > firstCat) {
    return "cat1";

  } else {
    return "os gatos trombam e o rato foge"; 
  }



  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNumbers) {

  let numbers = [];

  for (let index = 0; index < arrayNumbers.length; index++) {
    
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {

      numbers.push('fizzBuzz');

    } else if (arrayNumbers[index] % 3 === 0) {

      numbers.push('fizz');
      
    } else if (arrayNumbers[index] % 5 === 0) {

      numbers.push('buzz');
      
    } else if (arrayNumbers[index] % 3 != 0 && arrayNumbers[index] % 5 != 0) {

      numbers.push('bug!');
      
    }
  }
  return numbers;
  // seu código aqui
}

// Desafio 9
function encode(textReceived) {

  let textVector = textReceived.split('');
  let vectNumCompare = ['1','2','3','4','5'];
  let vectLetCompare = ['a','e','i','o','u',];

  for (let index = 0; index < textVector.length; index++) {
    
    for (let i = 0; i < vectLetCompare.length; i++) {
     
      if(vectLetCompare[i] === textVector[index]){
      
      textVector[index] = vectNumCompare[i];
      }
    }
    
  }

  return textVector.join('');

  // seu código aqui
}
function decode(textReceived) {

  let textVector = textReceived.split('');
  let vectNumCompare = ['1','2','3','4','5'];
  let vectLetCompare = ['a','e','i','o','u',];

  for (let index = 0; index < textVector.length; index++) {
    
    for (let i = 0; i < vectNumCompare.length; i++) {
     
      if(vectNumCompare[i] === textVector[index]){
      
      textVector[index] = vectLetCompare[i];
      }
    }
    
  }

  return textVector.join('') ;

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

// Desafio 10
function techList(listTech, name) {

  if(listTech.length === 0){

    return 'Vazio!';

  }else{

    listTech.sort();

    let vect = [];

    for (let index = 0; index < listTech.length; index++) {
      
      vect[index] = {
        tech:listTech[index],
        name: name
      };
      
    
    }

    return vect;
  }
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if(lineA < (lineB + lineC) && lineB < (lineC + lineA) && lineC < (lineA + lineB)) {

    if(lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineC - lineA) && lineC > Math.abs(lineA - lineB)){

      return true;

    } else{
      return false;
    }

  } else{

    return false;
  }
  // seu código aqui
}

// Desafio 13
function hydrate(textReceived) {

  let arrayStr = textReceived.match(/\d/g); //  match(/\d/g) - Função que pega numeros de uma string. Foi extraído do Stack Overflow (https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript)

  let arrayNumber = [];

  for (let index = 0; index < arrayStr.length; index++) {
    
    arrayNumber[index] = parseInt(arrayStr[index]);
    
  }

  let soma = 0;

  for (let index = 0; index < arrayNumber.length; index++) {
    
    soma = soma + arrayNumber[index];
    
  }

  if(soma <= 1){
    return soma + " copo de água";
  }

  if(soma > 1){
  return soma + " copos de água";
  }

  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

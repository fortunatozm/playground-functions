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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

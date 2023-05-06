let frutas = ["banana","maçã","pêssego","laranja","limão","melancia","kiwi"];
console.log(frutas);

let indice = frutas.indexOf("melancia");
console.log(`O item encontrado do índice, antes da remoção foi: ${frutas[indice]}`);
frutas.splice(indice,1);
console.log(frutas);
console.log(`O item encontrado do índice, depois da remoção foi: ${frutas[indice]}`);

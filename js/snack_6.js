/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */


const array = [2,6,8,'ciao',856,234,'nonne',345]

function getSumOfArrayElements(array){ 

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const castedElement = parseInt(array[i], 10);

    if(!Number.isNaN(castedElement)){
      sum = sum + castedElement;
    }
    
  }
  return sum;
}

console.log(getSumOfArrayElements(array))
//? Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.

function getRandomNumber (min, max){
  const numeroRandomico = Math.floor(Math.random() * (max - min + 1) + min);

  return numeroRandomico;
}

console.log(getRandomNumber(0, 10));
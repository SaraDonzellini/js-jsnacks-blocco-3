//? Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const numberList_1 = [1,2,3,5,7,345,7,9856,734,2,3,4,35,43,36,54,77,6,58,56,7,34,2,341,31,23]

const numberList_2 = [234,345,23426,45474765,6776,3453,32342,12312,12323,123322,1231,123,5465]

console.log(numberList_1)
console.log(numberList_2)


while (numberList_1.length !== numberList_2.length) {
  let userNumber = parseInt(prompt("inserisci un numero"))

  if (numberList_1.length > numberList_2.length) {
    numberList_2.push(userNumber)
  } else {
    numberList_1.push(userNumber)
  }
}

console.log(numberList_1)
console.log(numberList_2)
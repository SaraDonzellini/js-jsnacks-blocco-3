/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi dalla lista, diversi tra loro.
 *
 */
const startingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const newList = [];

// for (let i = 0; i < 10; i++) {
//   const randomIndex = getRandomNumber(0, startingList.length - 1);

//   if (!newList.includes(startingList[randomIndex])){
//     newList.push(startingList[randomIndex]);
//   }
// }

while(newList.length < 10) {
  const randomIndex = getRandomNumber(0, startingList.length - 1);
  const randomElement = (startingList[randomIndex]);

  if (!newList.includes(randomElement)){
    newList.push(randomElement);
  }
}

console.log(newList)




function getRandomNumber (min, max){
  const numeroRandomico = Math.floor(Math.random() * (max - min + 1) + min);

  return numeroRandomico;
}


function getRandomUniqueNumber(blackList, min, max){
  let isValid = false;
  let randomNum;

  while (isValid === false) {
    randomNum = getRandomNumber(min,max);

    if (!blackList.includes(randomNum)){
      isValid = true;
    }
  }

  return randomNum;
}
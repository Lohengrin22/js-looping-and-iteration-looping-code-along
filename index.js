// Code your solutions in this file
function writeCards(strName, evName) {
    let thankYouCards = []
    for (let i = 0; i < strName.length; i++) {
        thankYouCards.push(`Thank you, ${strName[i]}, for the wonderful ${evName} gift!`)
    }
    return thankYouCards
}

function countDown(num) {
    while (num > 0) {
      console.log(num);
      num -= 1;
    }
    console.log(num);
  }
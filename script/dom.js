//  bg-red function
function bgGreen() {
   const divOne = document.querySelector('.second-div');
   divOne.style.backgroundColor = "gray";
}

function bgRed() {
   const divTwo = document.querySelector('.first-div');
   divTwo.style.backgroundColor = "red";
}

// first approach of dom manipulation

const redButton = document.getElementById('red');
redButton.onclick = bgRed;
const greenButton = document.getElementById('Green-color');
greenButton.onclick = bgGreen;

// another aprroach but same thing
const backGold = document.getElementById('bg-gold');
backGold.onclick = function gold() {
   document.body.style.backgroundColor = "gold"
}


// Second Option
// syntax document.getElementById().addEventListener('event type [ki doroner event hbe]', handler [ki kaj korbe se function dite hobe])
function makeOrangeColor() {
   const thirdDiv = document.querySelector('.third-div')
   thirdDiv.style.backgroundColor = "orange";
   // this down line is for backgroundColor change for whole body
   // document.body.style.backgroundColor="chocolate"
}
document.getElementById('btn-make-orange').addEventListener('click', makeOrangeColor)
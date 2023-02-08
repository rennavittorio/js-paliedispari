/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Comunichiamo all’utente chi ha vinto. (decidete voi come)*/

//richiedere input user
let userChoice = '';
let userNum;

//ctrl input dell'user
do {

    alert('pls pay attention to instruction')
    userChoice = prompt('odd or even?');
    userNum = parseInt(prompt('insert a num from 1 to 5'));

} while(!isChoiceCorrect(userChoice) || !numIsBetween(userNum, 1, 5));

console.log('user has chosen:', userChoice, ' and num:', userNum);

//genero num rnd e sommo
let pcNum = rndNumGenerateBetween(1, 5);
console.log('pc rnd num is:', pcNum);

let gameSum = userNum + pcNum;
console.log('the sum is:', gameSum);

//ctrl per la vittoria
if (isEven(gameSum) && userChoice.toLowerCase() === 'even'){
    console.log('you win!!!');
} else if (!isEven(gameSum) && userChoice.toLowerCase() === 'odd') {
    console.log('you win!!!');
} else {
    console.log('you lose...');
};


//FUNCTIONS
//control input
//control num
function numIsBetween (num, min, max){
    if (num >= min && num <= max){
        return true;
    } else {
        return false;
    }
}

//control odd even user input
function isChoiceCorrect (choice){
    let choiceLower = choice.toLowerCase();
    if (choiceLower === 'odd' || choiceLower === 'even'){
        return true;
    } else {
        return false;
    }
}

//ctrl odd even num
function isDivisible(num, div){
    let rem = num % div;
    return rem === 0;
}

function isEven (num){
    let rem = isDivisible(num, 2);
    return rem;
}

//rnd num geenrator
function rndNumGenerateBetween (min, max){
    let rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return rndNum;
}
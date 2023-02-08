/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no */


let userWordInput = prompt('insert a word');
let palindromeChecked = isPalindrome(userWordInput);
console.log('word inserted is:', userWordInput);
console.log('is palindrome?', palindromeChecked);


//FUNCTION
//dato un array, voglio il suo inverso
function toReverseArray (startArray) {
    let reversedArray = []; //creo array reverse
    
    for (let i = 0; i < startArray.length; i++){
        let revIndex = startArray.length - 1 - i;
        reversedArray.push(startArray[revIndex]);
    }

    return reversedArray;
}

function isPalindrome (wordInput){
    
    let wordToLowerCase = wordInput.toLowerCase(); //controllo l'input
    let wordToArray = wordToLowerCase.split(''); //trasformo in array
    let reversedArray = toReverseArray(wordToArray); //reverse
    
    let palindromeWord = true; //faccio check tra array
    for (let i = 0; i < wordToArray.length; i++){
        if (wordToArray[i] !== reversedArray[i]){
            palindromeWord = false;
        }
    }
    
    return palindromeWord;
};


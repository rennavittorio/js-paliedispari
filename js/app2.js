/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no */

let userWordInput = '';

do {
    userWordInput = prompt('insert a word');
} while (userWordInput === null || userWordInput === '');


let palindromeChecked = isPalindrome(userWordInput);
console.log('word inserted is:', userWordInput);
console.log('is palindrome?', palindromeChecked);


//FUNCTION
//to split
function toSplitIntoArray (word){
    let wordIntoArray = [];
    for (let i = 0; i < word.length; i++){
        let selectedLetter = word[i];
        wordIntoArray.push(selectedLetter);
    }

    return wordIntoArray;
}


//dato un array, voglio il suo inverso
function toReverseArray (startArray) {
    let reversedArray = []; //creo array reverse
    
    for (let i = 0; i < startArray.length; i++){
        let revIndex = startArray.length - 1 - i;
        reversedArray.push(startArray[revIndex]);
    }

    return reversedArray;
}

// pulire un array da spazi vuoti
function toDeleteEmptyElements (array){
    for (let i = 0; i < array.length; i++){

        if (array[i] === ' '){ //serve aggiungere lo spazio
            array.splice(i, 1);
        }

    }

    return array;
}

//palidrome check
function isPalindrome (wordInput){
    
    //ctrl input case e spazi in caso di frasi
    let wordToArray = wordInput.toLowerCase().split('');
    wordToArray = toSplitIntoArray(wordToArray);
    wordToArray = toDeleteEmptyElements(wordToArray);
    let reversedArray = toReverseArray(wordToArray); //creo array reversed di ctrl
    
    let palindromeWord = true; //faccio check tra array
    for (let i = 0; i < wordToArray.length; i++){
        if (wordToArray[i] !== reversedArray[i]){
            palindromeWord = false;
        }
    }
    
    return palindromeWord;
};


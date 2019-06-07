/* Users will reset all function two (2) button (buttonFunction2), in order to clear 
   their input data onto the webpage.*/
function buttonFunction1() {
    document.getElementById("input1").value = "First Name";
    document.getElementById("input2").value = "Last Name";
    document.getElementById("input3").value = "";
    document.getElementById("outputText1").innerHTML = "";
    document.getElementById("outputText2").innerHTML = "";
    document.getElementById("outputText3").innerHTML = "";
    document.getElementById("outputText4").innerHTML = "";
    document.getElementById("outputText5").innerHTML = "";  
}

/* Users input data are stored and displayed, as output data prints onto the 
   guessing game webpage. */
function buttonFunction2() {
    var userInput1 = document.getElementById("input1").value;
    /*document.getElementById("outputText1").innerHTML = userInput1;*/

    var userInput2 = document.getElementById("input2").value;
    /*document.getElementById("outputText2").innerHTML = userInput2;*/

    var userInput3 = document.getElementById("input3").value;
    document.getElementById("outputText3").innerHTML = userInput3;
   
    document.getElementById("outputText4").innerHTML = "Welcome to the Numbers Guessing Game, " + userInput1 + ' ' + userInput2 + '.';
    document.getElementById("outputText5").innerHTML = userInput1 + ' ' + userInput2 + ',' + " you have five (5) chances to guess on five (5) random numbers from 1 to 20.  GOOD LUCK!";    
}

/* Users input current date that is stored and displayed, as output data prints onto the
   guessing game webpage. */
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;
document.querySelector("#input3").valueAsDate = new Date();

function buttonFunction3() {
    var userGuess1 = document.getElementById("guess1").value;
    document.getElementById("outputGuess1").innerHTML = userGuess1;

    var userGuess2 = document.getElementById("guess2").value;
    document.getElementById("outputGuess2").innerHTML = userGuess2;

    var userGuess3 = document.getElementById("guess3").value;
    document.getElementById("outputGuess3").innerHTML = userGuess3;

    var userGuess4 = document.getElementById("guess4").value;
    document.getElementById("outputGuess4").innerHTML = userGuess4;

    var userGuess5 = document.getElementById("guess5").value;
    document.getElementById("outputGuess5").innerHTML = userGuess5;    

    var guessListNumber = [];
    guessListNumber.push(userGuess1, userGuess2, userGuess3, userGuess4, userGuess5);
    document.getElementById("outputList").innerHTML = guessListNumber;  
    
    
}



var answerKey = 18; 
var count, len, text;
for (count = 0, len = guessListNumber.length, text = ""; count < len; count++) {
if (guessListNumber[count] === AnswerKey) {
   
    document.getElementById("outputAnswer").innerHTML = "Congratulation! You have guess the number " + AnswerKey + " correctly. And, YOU WIN THE NUMBER GUESSING GAME!";

    }

else {
    document.getElementById("outputAnswer").innerHTML = "Your five (5) numbers guesses, you have entered are incorrect.  Please click onto the 'Reset Numbers Guesses' buttton to try again.";
    }
}

function buttonFunction4() {
    document.getElementById("guess1").value = "1st Guess";
    document.getElementById("guess2").value = "2nd Guess";
    document.getElementById("guess3").value = "3rd Guess";
    document.getElementById("guess4").value = "4th Guess";
    document.getElementById("guess5").value = "5th Guess";
    document.getElementById("outputGuess1").innerHTML = "";
    document.getElementById("outputGuess2").innerHTML = "";
    document.getElementById("outputGuess3").innerHTML = "";
    document.getElementById("outputGuess4").innerHTML = "";
    document.getElementById("outputGuess5").innerHTML = "";
    document.getElementById("outputList").innerHTML = "";
}




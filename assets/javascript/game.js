

// Aray of possible words for computer to choose
var words = ["catnip", "whisker", "pounce", "meow", "claws", "paws", "tail"];

// Start Button 
var button = document.getElementById("startButton");

// Random word from array
var random;

// User guess array
var underscoreArray;

// Lives available
var life = 6;

//Score for keeping track of if won
var score = 0;

//Keeps track of wins
var wins = 0;

// Function to print _ for each blank letter
function printUnderscore() {
    var wordString = "";
    for (let index = 0; index < underscoreArray.length; index++) {
        
        wordString = wordString + ( " " + underscoreArray[index]);
        
    }
    document.querySelector("#word").textContent = wordString;
    console.log("Function is a go");
}

// Creates array holding underscores
function createUnderscore() {
    underscoreArray = new Array(random.length);
    for(var index = 0; index < underscoreArray.length; index++){
        underscoreArray[index] = "_";
    }
}

// Function for checking if game is over
function gameOver(wompwomp) {
    // If > 0, game continues and life is lost
    if (life > 0) {
        life--;
        alert("Try again!");
}   
    // Gives game over if life = 0
    else if (life = 0){
        gameOver();
        console.log("Game over man");      
    }
} 



// Function for comparing userGuess to letters in string
var userInput = true;

function checkGuess(word) {
    var notMatched = true;
    for (let index = 0; index < random.length; index++) {
        console.log("Checking character " + random [index]);

        // Checks if letter exists in string
        if(word === random[index]){
        alert("Good guess!");
        notMatched = false;
        score++;
            if(score === random.length) {
                confirm("You win!");
                win++;
            }

        // Hopefully replaces _ with letter
        underscoreArray[index] = word;
        console.log("Correct user guess");
        printUnderscore();
        }   
    } 
     
     // Check if there are more guesses available
    if(notMatched) {
        gameOver();
        console.log("not matched " + life);
        printWrong (word);

    }
}

// Print incorrect guesses
function printWrong(wrongGuess) {
        var para = document.createElement("p");
        var wrongLetter = document.createTextNode(wrongGuess);
        para.appendChild(wrongLetter);
        document.getElementById("wrong").appendChild(para);
        console.log("Wrong letter logged");
}

// Function for hearing keypress
var timeout = null;
document.onkeydown = function(e) {
    console.log("input");
    clearTimeout(timeout);

    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        console.log('Input Value:', e.key.toLowerCase());
        checkGuess(e.key.toLowerCase())
    }, 500);
};

function resetGame(){
    score = 0;
    
}

// When clicking start. computer randomly picks word & prints to console log
button.addEventListener("click", function() {
        console.log("Youve clicked start");
        random = words[Math.floor(Math.random() * words.length)];
        console.log(random);

        createUnderscore();

        // Places underscores to indicate how many letters are in word
        printUnderscore();
        console.log("Underscores");

        //Alert to start guessing
        alert("Guess letters to guess the word!");
        console.log("Alert");
        
})

    



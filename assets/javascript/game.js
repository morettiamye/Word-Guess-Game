

// Aray of possible words for computer to choose
var words = ["catnip", "whisker", "pounce", "meow", "claws", "paws", "tail"];

// Start Button 
var button = document.getElementById("startButton");

// Random word from array
var random;

// Lives available
var life = 6;

// Function to print _ for each blank letter
function printUnderscore(words) {
    for (let index = 0; index < random.length; index++) {
        var underscore = document.createTextNode( " _ " );
        var div = document.getElementById("word");
        div.appendChild(underscore);
        console.log("Function is a go");
        
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
function checkGuess(word) {
    for (let index = 0; index < random.length; index++) {

        // Checks if letter exists in string
        if (userGuess() === random.charAt[index]) {
            alert("Good guess!")
           
            // Hopefully replaces _ with letter
            var correct = document.createTextNode( userGuess );
            var div = document.getElementById("word");
            div.appendChild(correct);
            console.log("Correct user guess");           
        } 
        // Check if there are more guesses available
        else {
            gameOver();
            console.log("Game over man");

        } 
        
    }
}

// Function for hearing keypress
function userGuess(keyboard) {
    document.onkeypress = function(e) {
        e = e || window.event;
        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        if (charCode) {
            alert("Character typed: " + String.fromCharCode(charCode));
        }
    };
}



// When clicking start. computer randomly picks word & prints to console log
button.addEventListener("click", function() {
        console.log("Youve clicked start");
        random = words[Math.floor(Math.random() * words.length)];
        console.log(random);

        // Places underscores to indicate how many letters are in word
        printUnderscore(random);
        console.log("Underscores");

        //Alert to start guessing
        alert("Guess letters to guess the word!");
        console.log("Alert");

        //Event Listener - Keyboard letter guess
        userGuess();
        
        //Run checkGuess function
        checkGuess();
})

    



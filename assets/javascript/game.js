

// Aray of possible words for computer to choose
var words = ["catnip", "whisker", "pounce", "meow", "claws", "paws", "tail"];

// Start Button 
var button = document.getElementById("startButton");

// Random word from array
var random;

// Function to print _ for each blank letter
function printUnderscore(words) {
    for (let index = 0; index < random.length; index++) {
        var underscore = document.createTextNode( " _ " );
        var div = document.getElementById("word");
        div.appendChild(underscore);
        console.log("Function is a go");
        
    }
}

// When clicking start. computer randomly picks word & prints to console log
button.addEventListener("click", function() {
        console.log("Youve clicked start");
        random = words[Math.floor(Math.random() * words.length)];
        console.log(random);
        printUnderscore(random);
        console.log("Underscores");
})

    



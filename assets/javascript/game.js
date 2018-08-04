

// Aray of possible words for computer to choose
var words = ["catnip", "whisker", "pounce", "meow", "claws", "paws", "tail"];

// When clicking start. computer randomly picks word & prints to console log
var button = document.getElementById("startButton");

// Random word
var random;

button.addEventListener("click", function() {
        console.log("Youve clicked start");
        random = words[Math.floor(Math.random() * words.length)];
        console.log(random);
    })

for (let index = 0; index < words.length; index++) {
    console.log("Underscores displaying");

    
}

    



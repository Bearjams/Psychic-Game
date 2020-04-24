var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 7;
var computerGuess = "";



var computerGuess = options[Math.floor(Math.random() * options.length)];

("computer guess: " + computerGuess)


function restart (){
  guessesLeft= 7;
  lettersGuessed= [];
  computerGuess = options[Math.floor(Math.random() * options.length)];
  ("computer guess: " + computerGuess)
}

document.onkeyup = function(event) {
    var key = event.key.toLowerCase();
    

    //console.log(key);
    ("user guess: " + key);

    if (key === computerGuess){
      wins++
      alert("You've Guessed Correct: " + key)
      restart();
    }
    
    else {
      guessesLeft--;
      lettersGuessed.push(key);
    }
    if (guessesLeft === 0){
      losses++
      alert("you lose");
      restart();
    }
    
    
    var html = "<p>Guess what letter I'm thinking of</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>guesses left: " + guessesLeft + "</p>" +
    "<p> Letters Guessed: "  + lettersGuessed + "</p>";

    document.querySelector('#game').innerHTML = html; 

    
    

}
    
    
    
    
    
    
    

    
        
    


var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var emptyString = "";
var wins = 0;
var losses = 0;
var guessesLeft = "";
var lettersGuessed = [];
var guessesLeft = 7;
var userGuess = "";
// var userGuess = "";
// document.onkeyup = function(event) {
//     var letter = event.key.toLowerCase();
//     while (emptyString.length < 26) {
//         emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
//       } 
//       console.log(emptyString);
    // for(let i = 0; i < options.length; i++){
    //     console.log(options[i]);
        
    
// }
// function getRandomLetter() {
//   return alphabet[Math.floor(Math.random() * alphabet.length)];
// }
var computerGuess = options[Math.floor(Math.random() * options.length)];



// while (emptyString.length < 1) {
//   randomLetter = getRandomLetter();
//   emptyString += randomLetter;
// } 

alert("computer guess: " + computerGuess)
console.log("computer guess: " + computerGuess)

function resetGame (){
  guessesLeft=7;
  options=[];
  var computerGuess = options[Math.floor(Math.random() * options.length)];
  lettersGuessed=[]
  
}

document.onkeyup = function(event) {
    var options = event.key.toLowerCase();
    

    console.log(options);
    alert("user guess: " + options);

    if (options === computerGuess){
      wins++
      alert("You've Guessed Correct: " + options)
      resetGame();
      // document.location.reload();
      // clearInterval(interaval);
    }
    
    else {
      guessesLeft--;
      lettersGuessed.push(options);
    }
    if (guessesLeft === 0){
      losses++
      alert("you lose");
      resetGame();
      // document.location.reload();
      // clearInterval(interaval);
    }
    
    
    var html = "<p>Guess what letter I'm thinking of</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>guesses left: " + guessesLeft + "</p>" +
    "<p> Letters Guessed: "  + lettersGuessed + "</p>";

    document.querySelector('#game').innerHTML = html; 
    // $("#game").prepend("<br>" + html);

}
    // document.getElementById('wins').innerHTML = "Wins: " + wins;   
    // document.getElementById('losses').innerHTML = "Losses: " + losses;   
    // document.getElementById('guesses left').innerHTML = "Guesses left: " + guessesLeft;
    // document.getElementById('guesses so far').innerHTML = "Guesses so far" + options;   

    
    
    
    
    
    // if (options== "a" || options=="b" || options=="c" || options== "d" || options=="e" || options=="f" ||
    // options== "g" || options=="h" || options=="i" || options== "j" || options=="k" || options=="l" ||
    // options== "m" || options=="n" || options=="o" || options== "p" || options=="q" || options=="r" ||
    // options== "s" || options=="t" || options=="u" || options== "v" || options=="w" || options=="x" ||
    // options== "y" || options=="z" ){
    // if (letter === alphabet){

    
        
    


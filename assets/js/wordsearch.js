///////////////////////////////////////////////////
//GLOBAL VARIABLES/////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

//nummber of wins
var wins = 0;
//number of losses;
var losses = 0;
//number of guesses;
var guesses = 0;
//sizeofgameboard
var wordSize = 0;

//words picked
var wordPicked = "";
//words broken down into characters
var letterArray = [];
//word bank of incorrect guesses
var wrongGuesses = [];
//bank of available words to play with
var wordList = [
  "lion",
  "tigers",
  "bears",
  //"the-tin-man",
  //"the-scarecrow",
  //"the-cowardly-lion",
  "dorothy",
  "tinman",
  "scarecrow",
  "wizard",
  "munchkins"
  //"the-munchkins",
  //"the-wizard",
  //"the-wicked-witch"
];
//makes array of current gamestate including the gameboard and correct guesses
var currentGameState = [];
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
//Functions////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
function startGame() {
  //these three reset for the new round
  guesses = 7;
  wrongGuesses = [];
  currentGameState = [];
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("guesses").innerHTML = guesses;
  document.getElementById("losses").innerHTML = losses;

  //declare game variables and confirm each is working
  wordPicked = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(wordPicked);
  letterArray = wordPicked.split("");
  console.log(letterArray);
  wordSize = letterArray.length;
  console.log(wordSize);

  //set the game board
  for (var i = 0; i < wordSize; i++) {
    currentGameState.push("_");
  }
  //log the gameboard
  console.log(currentGameState);
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");
  document.getElementById("guesses").innerHTML = guesses;
  document.getElementById("board").innerHTML = currentGameState.join(" ");
}

function letterCheck(letterGuessed) {
  var inWord = false;

  for (var i = 0; i < wordSize; i++) {
    if (wordPicked[i] === letterGuessed) {
      inWord = true;
    }
  }

  if (inWord === true) {
    for (var i = 0; i < wordSize; i++) {
      if (wordPicked[i] === letterGuessed) {
        currentGameState[i] = letterGuessed;
      }
    }
    console.log(currentGameState);
  } else {
    wrongGuesses.push(letterGuessed);
    guesses--;
  }
}

function afterGuess() {
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  console.log("Guesses Remaining: " + guesses);
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");
  document.getElementById("guesses").innerHTML = guesses;
  document.getElementById("board").innerHTML = currentGameState
    .join(" ")
    .toUpperCase();

  if (letterArray.toString() === currentGameState.toString()) {
    wins++;
    $("#congratulatory_message").modal("show");
    var championTunes = document.getElementById("winAudio");
    championTunes.play();
    document.getElementById("wins").innerHTML = wins;
  } else if (guesses === 0) {
    losses++;
    $("#loser_message").modal("show");
    var loserTunes = document.getElementById("lossAudio");
    loserTunes.play();
    document.getElementById("losses").innerHTML = losses;
  }
}

startGame();

document.onkeyup = function(event) {
  var keyPicked = String.fromCharCode(event.which).toLowerCase();
  letterCheck(keyPicked);
  afterGuess();
};

$("#replay").on("click", function() {
  startGame();
});

$(".letter").on("click", function() {
  var buttonGuess = $(this).val().toString.toLowerCase;

  console.log("buttonGuess: " + buttonGuess);
  letterCheck(buttonGuess);
  afterGuess();
});

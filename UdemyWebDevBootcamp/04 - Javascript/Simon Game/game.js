var buttonColours  = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var i = 0;
inGame = false;

function playSound(name) {
  var noise = new Audio("sounds/" + name + ".mp3");
  noise.play();
}

function animatePress(name) {
  $("#" + name).toggleClass("pressed");
  setTimeout(function() {
    $("#" + name).toggleClass("pressed");
    }, 500);
}

// Comp actions
function nextSequence() {
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  i++;

  setTimeout(function() {
    if (i < level) {
      nextSequence();
    }
  }, 800)

  if (i === level) {
    console.log("Game seq: " + gamePattern);
  }
}

function resetGame() {
  inGame = false;
  level = 0;
  i = 0;
  userClickedPattern = [];
  gamePattern = [];
}

// Check user answer against comp's
function checkAnswer() {
  for (var x = 0; x < userClickedPattern.length; x++) {
    if (userClickedPattern[x] !== gamePattern[x]) {
      $("h1").text("Game Over! Press any key to restart");
      $("body").toggleClass("game-over");
      setTimeout(function() {
        $("body").toggleClass("game-over");
      }, 200);
      playSound("wrong");
      resetGame();
      break;
    }
  }

  if (userClickedPattern.length === gamePattern.length && inGame) {
    level++;
    i = 0;
    userClickedPattern = [];
    gamePattern = [];
    setTimeout(function() {
      nextSequence();
    }, 1000);
  }
}

// Detect user button clicks
var num_buttons = $(".btn").length
for (var z = 0; z < num_buttons; z++) {
  $(".btn")[z].addEventListener("click", function(e) {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log("user seq: " + userClickedPattern);
    checkAnswer();
  });
}

// Detect when game starts
$(document).keydown(function() {
  if (level === 0) {
    level++;
    nextSequence();
    inGame = true;
  }
});

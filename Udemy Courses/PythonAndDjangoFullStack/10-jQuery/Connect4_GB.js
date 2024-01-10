//Ask users for their colors
function playerColors() {
  var p1Color = prompt("Player 1: what color would you like to be?")
  var p2Color = prompt("Player 2: what color would you like to be?")
  return [p1Color, p2Color]
}

//Message for which player's turn it is or if it's game over
function statusMessage(player1Turn, gameOver) {
  if (gameOver == true) {
    $("h4").text("Game Over! Refresh the browser to play again!")
  } else {
    if (player1Turn == false) {
      $("h4").text("It's Player 2's turn! Choose column for your move")
    } else {
      $("h4").text("It's Player 1's turn! Choose column for your move")
    }
  }
}

// http://stackoverflow.com/questions/6139407/getting-td-by-index-with-jquery
function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

// Change the color of a button
function changeColor(rowIndex,colIndex,color) {
  return gameBoard.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color)
}

// Report Back to current color of a button
function returnColor(rowIndex,colIndex) {
  return gameBoard.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Take in column index, returns the bottom row that is still gray
function checkBottom(colIndex) {
  for (var row = 5; row > -1; row--) {
    var colorReport = returnColor(row,colIndex)
    console.log(colorReport)
    if (colorReport === 'rgb(128, 128, 128)') {
      return row
    }
  }
}

// Check to see if 4 inputs are the same color
function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

// Check for Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Vertical Wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Diagonal Wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

$("button").click(function() {
  if (player1Turn == true) {
    //Get column of selected move
    var col = $(this).closest("td").index()

    //Get row for which cell to color
    var row = checkBottom(col)

    //Change cell color
    changeColor(row,col,p1Color)

  } else {
    //Get column of selected move
    var col = $(this).closest("td").index()

    //Get row for which cell to color
    var row = checkBottom(col)

    //Change cell color
    changeColor(row,col,p2Color)
  }

  //Switch current
  player1Turn = !player1Turn

  //Check for a win
  if (horizontalWinCheck() == true || verticalWinCheck() == true || diagonalWinCheck() == true) {
    gameOver = true
  }

  statusMessage(player1Turn, gameOver)
})

//Gameplay
var gameBoard = $("table tr")
var colors = playerColors()
var p1Color = colors[0]
var p2Color = colors[1]
var player1Turn = true
var gameOver = false
var madeMove = false

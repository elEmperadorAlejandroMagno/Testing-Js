// Looping a triangle
function drawTriangle(txt) {
  for (let line = txt; line.length <= 7; line+=txt) {
    console.log(line)
  }
}

/*  
#
##
###
####
#####
######
#######
*/

// Fizz buzz
function checkFizzBuzz() {
  for (let n = 0; n < (100 - 1); n++) {
    let txt = ""
    if (n % 3 == 0) txt += "Fizz";
    if (n % 5 == 0) txt += "Buzz";
    console.log(txt || n)
  }
}

// chess board

let size = 8;
let board = "";

function drawChessBoard() {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if ((x + y) % 2 == 0) {
        board += "⬛"
      } else {
        board += "⬜"
      }
    }
    board += "\n"
  }
  
console.log(board)
}
drawChessBoard();
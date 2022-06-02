/*-------------------------------- Constants --------------------------------*/

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]

/*---------------------------- Variables (state) ----------------------------*/

let winner 
let board
let turn

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector('board')
const messageE1 = document.getElementById('messege')

/*----------------------------- Event Listeners -----------------------------*/

board.addEventListener('click', function() {
  handleClick()
})

/*-------------------------------- Functions --------------------------------*/

function init(){
  var board = [ null, null, null, null, null, null, null, null, null]
  let turn = 1
  let winner = null
  render()
}

function render(){
  board.forEach(function(pos){
    pos = squareEls(board.indexOf(pos))
  })
  if (winner === null){
    return ("It's your turn player 1!")
  }if (winner === T){
    return ("It's a Tie!!")
  }else {
    return ("Congrats Player ''! You have won!")
  }
}

function handleClick(evt){

}

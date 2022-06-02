/*-------------------------------- Constants --------------------------------*/

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]

/*---------------------------- Variables (state) ----------------------------*/

let winner 
let board
let turn

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageE1 = document.getElementById('messege')

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function(square){
  square.addEventListener('click', handleClick)
})

/*-------------------------------- Functions --------------------------------*/

function init(){
  board = [ null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render(){
  board.forEach(function(pos, index){
    pos = squareEls(board.indexOf(pos))
  })
  if (winner === null){
    return messageE1=("It's your turn player 1!")
  }if (winner === T){
    return messageE1=("It's a Tie!!")
  }else {
    return messageE1=("Congrats Player ''! You have won!")
  }
}

function handleClick(evt){
  console.log(evt)
  console.log(evt.target)
  console.log(evt.target.id)
  const sqIdx = evt.target.id
  board[sqIdx] = turn
  turn = turn * -1
  render()

}

function getWinner(){
  
}

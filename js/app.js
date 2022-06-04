/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8]
]

/*---------------------------- Variables (state) ----------------------------*/

let winner
let board
let turn

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function (square) {
  square.addEventListener('click', handleClick)
})

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1 
  winner = null
  render()
}



function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.slice(2))
  if (board[sqIdx] !== null) {
    return
  } if (winner !== null) {
    return
  }
  board[sqIdx] = turn
  turn *= - 1
  winner = getWinner()
  render()
  // console.log(evt)
  // console.log(evt.target)
  // console.log(evt.target.id)
  console.log(board);
}

function render() {
  board.forEach(function (square, idx) {
    
    if (square === 1) {
      squareEls[idx].textContent = 'X'
    } else if (square === -1) {
      squareEls[idx].textContent = '0'
    } else if (square === null) {
      squareEls[idx].textContent = ' '
    }
  })
  if (winner === null){
    return (turn === 1 ? messageEl.textContent = "It's your turn X!": messageEl.textContent = "It's your turn O!")
  } else if (winner === "T") {
    messageEl.textContent = "It's a Tie! "
  } else {
    return (winner === 1 ? messageEl.textContent = "Congrats X! You're Winner!": messageEl.textContent = "Congrats O! You're the Winner!")
  }
} 
  // if (winner === null) {
  //   turn === 1 ?messageEl.textContent = `It's your turn ${turn}!`
  // } if (winner === 'T') {
  //   messageEl.textContent = "It's a Tie!!"
  // } if (winner === 1) {
  //   messageEl.textContent = `Congrats ${winner}! You have won!`
  // } if (winner === -1) {
  //   messageEl.textContent = `Congrats ${winner}! You have won!`
  // }
    
// }


function getWinner() {
  let sum = 0
  for (let i = 0; i < winningCombos.length; i++) {
      Math.abs = board[winningCombos[1][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
    if (sum === 3) {
      return 1
    } else if (sum === -3) {
      return -1
    } else if (board.includes(null) === false) {
      return 'T'
    } 
    return null
  }
} 
  



/*-------------------------------- Constants --------------------------------*/

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]

/*---------------------------- Variables (state) ----------------------------*/

let winner
let board
let turn

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageE1 = document.getElementById('message')

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

function playerTurn() {
  if (turn === 1) {
    return 'X';
  } else {
    return 'O';
  }
}


function render() {
  board.forEach(function (board, idx) {
    if (board === 1) {
      squareEls[idx].textContent = 'X'
    } else if (board === -1) {
      squareEls[idx].textContent = '0'
    } else if (board === null) {
      squareEls[idx].textContent = ''
    }
    if (winner === null) {
      return messageE1.textContent = (`It's your turn ${playerTurn()}!`)
    } if (winner === 'T') {
      return messageE1.textContent = ("It's a Tie!!")
    } else if (winner === 1) {
      return messageE1.textContent = (`Congrats ${playerTurn()}! You have won!`)
    } else if (winner === -1) {
      return messageE1.textContent = (`Congrats ${playerTurn()}! You have won!`)
    }

  })
}

function handleClick(evt) {
  // console.log(evt)
  // console.log(evt.target)
  // console.log(evt.target.id)
  const sqIdx = parseInt(evt.target.id.slice(2))
  if (board[sqIdx] !== null) {
    return
  } if (winner !== null) {
    return
  }
  board[sqIdx] = turn
  turn = turn * - 1
  render()



}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let total = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
    if (total === 3) {
      winner = 1
    } else if (total === -3) {
      winner = -1
    } else if (total !== 3 || -3) {
      winner = 'T'
    } else {
      return null
    }
  }
}

// function getWinner(){
//   let total = 0
//   const allSums = []
//   winningCombos.forEach(function(element){
//     const firstIndex = element[0]
//     const secondIndex = element[1]
//     const thirdIndex = element[2]
//     const firstValue = board[firstIndex]
//     const secondValue = board[secondIndex]
//     const thirdValue = board[thirdIndex]
//     const sum = firstValue + secondValue + thirdValue
//     allSums.push(sum)
//   }
//   )}

// // if 3 winner 1
// //if -3 winner -
//     let total = element.reduce((prev, num) => prev + num)
//     console.log()



$(document).ready(function () {
  var board = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  var humanPlayer = 'X'
  var computerAi = 'O'
  var newBoard = []

  /**
   * Defining winning moves
   * @param {*} board 
   * @param {*} player 
   */
  function winning (player) {
    if (
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
      )
      return true
    else {
      return false
    }
  }
  /**
   *Finding empty spaces on the board 
   * @param {*} board 
   */
  function emptyIndexies (board) {
    return board.filter(function (s) {
      s != 'O' && s != 'X'
    })
  }
  /**
   * human turn (displays X on DOM)
   * @param {*} e 
   */
  function humanTurn (e) {
    $(e.target).html(humanPlayer)
    boardState(e)
  }

  $('#gameBoard').click(humanTurn)

  function boardState (e) {
    var i = Number(e.target.id)
    if (humanTurn) {
      board.splice(i, 1, humanPlayer)
      newBoard = board
    }
    computerTurn()
  // console.log(newBoard)
  }

  

  function computerTurn (e) {
    // var i = Number(e.target.id)
    var random = newBoard[Math.floor(Math.random() * newBoard.length)]
    if (humanTurn) {
      for (var j = 0; j < newBoard.length; j++) {
        if (newBoard[j] != humanPlayer && newBoard.indexOf(random) !== -1) {
          newBoard[j] = computerAi
          $('#' + random).html(computerAi)
          break
        }
      }

      console.log(random)
    }
  }
})

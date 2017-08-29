$(document).ready(function () {
  var board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  var defaultBoard = board.slice(0);
  var humanPlayer = '';
  var computerAi = '';
  var newBoard = [];

  $(".btn-lg").click(function(e) {
    humanPlayer = e.target.innerHTML;
    if (humanPlayer == 'X') {
      computerAi = 'O';
    } else {
      computerAi = 'X';
    }
    $(".btn-lg").prop('disabled', 'true');
  })

  function reset() {
    board = defaultBoard.slice(0);
    newBoard = board.slice(0);
    console.log('Board');
    console.log(board)
    $(".btn-lg").removeAttr('disabled');
    $(".boardBox").html('');
    humanPlayer = computerAi = '';
  }

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
  // function emptyIndexies (board) {
  //   return board.filter(function (s) {
  //     s != 'O' && s != 'X'
  //   })
  // } 
  
  /**
   * human turn (displays X on DOM)
   * @param {*} e 
   */
  function humanTurn (e) {
    if (!humanPlayer) {
      alert('Select token to start the game.')
    } else {
      if (e.target.innerHTML == humanPlayer || e.target.innerHTML == computerAi) {
        e.target.preventDefault;
      } else {
        $(e.target).html(humanPlayer)
        boardState(e)  
      }
    }
  }

  $('#gameBoard').click(humanTurn)
  
  function boardState (e) {
    var i = Number(e.target.id)
    if (humanTurn) {
      board.splice(i, 1, humanPlayer)
      newBoard = board
    }
    computerTurn();
    endGame();
   
  }

  /**
   * Defining a random computer move
   * @param {*} e 
   */

  function computerTurn (e) {
    //var j = Number(e.target.id)
    
    if (humanTurn) {
      for (var j = 0; j < newBoard.length; j++) {
        var random = newBoard[Math.floor(Math.random() * newBoard.length)]
        var indexRandom = newBoard.indexOf(random);
        if (indexRandom != humanPlayer && random != humanPlayer && random!= computerAi) {
          
          
          newBoard[indexRandom] = computerAi;
          $('#' + random).html(computerAi)
          break;
        }
      }

      //console.log(newBoard)
    }
  }

  /**
   * Checking the winner
   */
  
  function endGame() {
    if (winning(humanPlayer)) {
      endGameCallback(true); 
    } else if (winning(computerAi)) {
      endGameCallback(false);
    };
  }

  function endGameCallback(win) {
    setTimeout(function() {
      if (win) {
        alert('You won');
      } else {
        alert('You lost');
      }
      reset();
    }, 0);
  }
})

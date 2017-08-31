$(document).ready(function () {
  var GREEN = 'green'
  var RED = 'red'
  var YELLOW = 'yellow'
  var BLUE = 'blue'

  var colors = [GREEN, RED, YELLOW, BLUE]
  var sequence = []
  var playerMoves = []

  $('#green').click(function () {
    playerMoves.push(GREEN)
  })

  $('#red').click(function () {
    playerMoves.push(RED)
  })

  $('#yellow').click(function () {
    playerMoves.push(YELLOW)
  })

  $('#blue').click(function () {
    playerMoves.push(BLUE)
  })

  

  /**
   * Generate a random color sound and store it in the sequence array
   */
  function generateSound () {
    var random = colors[Math.floor(Math.random() * colors.length)]
    sequence.push(random)
  }

  function player () {
  }
})

$(document).ready(function () {

  var colors = {
    green: {
      audio: 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'
    },
    red: {
      audio: 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'
    },
    yellow: {
      audio: 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'
    },
    blue: {
      audio: 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
    },
  };

  var sequence = [];
  var playerMoves = [];
  var gameStarted = false;
  var count = 0;
  var MAX_COUNT = 20;
  var sequenceInterval;
  var strictMode = false;

  var counterEl = $("#counter");
  var startBtn = $("#start");
  var restartBtn = $("#restart");
  var strictCb = $("#strict");
  var colorBtn = $('.buttonBody');
  

  /**
   * If game has started
   * Save player move, and play its audio
   * Validate moves against computer generated
   */
  function colorButtonClick(e) {
    if (gameStarted) {
      var id = e.target.id;
      // console.log(id);
      // console.log(colors[id].audio);
      playerMoves.push(id);
      playAudio(id);
      // console.log(playerMoves);
      setActiveColor(id);
      validateMoves();
    }
  }

  /**
   * Starts the game
   * Disables button
   * Start generating the first sound
   */
  function startGame() {
    gameStarted = true;
    startBtn.prop('disabled', true);
    counterEl.html("0");
    generateSound();
  
  }

  /**
   * Change color element
   * @param {*} id 
   */
  function setActiveColor(id) {
    var elId = '#' + id;
    $(elId).addClass('active');
    setTimeout(function () {
      $(elId).removeClass('active');
    }, 500);
  }

  /**
   * Play audio from colors object
   * @param {*} id 
   */
  function playAudio(id) {
    var audio = new Audio(colors[id].audio);
    audio.play();
  }

  /**
   * Validate sequence vs playerMoves
   * Call the logic only when sequence length == playerMoves length
   * If there is any different color per index then alert the player handling strict mode
   * Otherwise increment counter and generate new sound
   * If max number of sounds is achieved then reset the game
   */
  function validateMoves() {
    if (playerMoves.length == sequence.length) {
      for (var i = 0; i < sequence.length; i++) {
        if (playerMoves[i] != sequence[i]) {
          setTimeout(function () {
            alert('Wrong move');
            playSequence();
            playerMoves = [];
            if (strictMode) {
              reset();
              startGame();
            }
          }, 500)
          return;
        }
      }
      count++;
      counterEl.html(count);
      if (count == MAX_COUNT) {
        setTimeout(function () {
          alert('You won !');
          reset();
        }, 500)
      } else {
        playerMoves = [];
        generateSound();
      }
    }
  }

  /**
   * Reset all states
   */
  function reset() {
    count = 0;
    counterEl.html(count);
    startBtn.prop('disabled', false);
    sequence = [];
    playerMoves = [];
    gameStarted = false;
    clearInterval(sequenceInterval);
    
  }

  /**
   * Generate a random color sound and store it in the sequence array
   */
  function generateSound() {
    var cols = Object.keys(colors);
    var random = cols[Math.floor(Math.random() * cols.length)];
    sequence.push(random);
    // console.log('Sequence: ' + sequence);
    playSequence();
  }

  /**
   * Play sequence sound and activate color
   * each 1s
   */
  function playSequence() {
    var index = 0;
     sequenceInterval = setInterval(function () {
      var color = sequence[index];
      if (index == sequence.length) {
        clearInterval(sequenceInterval);
      } else {
        playAudio(color);
        setActiveColor(color);
        index++;
      }
    }, 1000);
  }

  /**
   * Toggle strict mode
   */
  function strict() {
    strictMode = !strictMode;
  }



  // Button events
  startBtn.click(startGame);
  restartBtn.click(reset);
  strictCb.change(strict);
  colorBtn.click(colorButtonClick);
})

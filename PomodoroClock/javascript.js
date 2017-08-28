$('document').ready(function () {

  var output = $('#output');
  var startBtn = $('#start');

  var DEF_MIN = 25, BREAK_MIN = 5;
  var TOTAL_SECONDS = 60;
  var min = DEF_MIN, minBreak = BREAK_MIN, seconds = 0;

  var sessionIn, breakIn, isStarted;
  
  // State used for global actions like pause/start
  var globalState = "time";

  $("#timeState").html('TO BE STARTED ...')
  $('#sessionTime').html(DEF_MIN)
  $('#breakTime').html(BREAK_MIN)

  /**
   * Actions
   */

  $('#minusTime').click(function () {
    DEF_MIN--;
    min = DEF_MIN;
    $('#sessionTime').html(DEF_MIN)
  })

  $('#plusTime').click(function () {
    DEF_MIN++;
    min = DEF_MIN;
    $('#sessionTime').html(DEF_MIN)
  })

  $('#minusBreak').click(function () {
    BREAK_MIN--;
    minBreak = BREAK_MIN;
    $("#breakTime").html(BREAK_MIN);
  })

  $('#plusBreak').click(function () {
    BREAK_MIN++;
    minBreak = BREAK_MIN;
    $("#breakTime").html(BREAK_MIN);
  })
  
  /**
   * Start a timer for given state and seconds
   * @param {*} state 
   */
  function timer(state) {
    return setInterval(function() {
      seconds--;
      display(seconds, state);
      if (seconds == 0) {
        if (state == "time") {
          clearInterval(sessionIn);
          globalState = "break";
          startTimer("break");
        } else {
          clearInterval(breakIn);
          globalState = "time";
          startTimer("time");
        }
      }  
    }, 1000)
  }

  /**
   * Start the timer depending on state
   * @param {*} state 
   */
  function startTimer(state, pausedSec) {
    if (state == "time") {
      seconds = pausedSec ? pausedSec : min * TOTAL_SECONDS;
      sessionIn = timer(state);
    } else {
      seconds = pausedSec ? pausedSec : minBreak * TOTAL_SECONDS;
      breakIn = timer(state);
    }
  }
  
  /**
   * Display timer to the dom
   * @param {*} sec 
   * @param {*} state 
   */
  function display(sec, state) {
    if (state == 'time') {
      $("#timeState").html('SESSION TIME ...');
    } else if (state == 'break') {
      $("#timeState").html('BREAK TIME ...');
    } else {
      $("#timeState").html("TO BE STARTED ...")
    }
    
    var m = Math.floor(sec / TOTAL_SECONDS);
    var s = sec % TOTAL_SECONDS;
    output.html(m + ':' + s);
  }

  /**
   * Run Timer
   */
  function run() {
    isStarted = startBtn.html() == 'Start';
    isStarted ? startBtn.html('Pause') : startBtn.html('Start');
    
    // If is paused clear both intervals otherwise startTimer using the global state
    if (!isStarted) {
      clearInterval(sessionIn);
      clearInterval(breakIn);
    } else {
      startTimer(globalState, seconds > 0 ? seconds : null);
    }
  }

  startBtn.click(run)

  $("#reset").click(function(){
    min = DEF_MIN;
    var sec = min * TOTAL_SECONDS;
    seconds = 0;
    clearInterval(sessionIn);
    clearInterval(breakIn);
    globalState = "time";
    startBtn.html("Start");
    display(sec, "to be started")
  })



})

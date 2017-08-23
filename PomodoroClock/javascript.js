$('document').ready(function () {
  var output = $('#output')

  var DEF_MIN = 1, DEF_SEC = 3, BREAK_MIN = 1, BREAK_SEC = 4 // default given data

  var min = DEF_MIN, sec = DEF_SEC, minBreak = BREAK_MIN, secBreak = BREAK_SEC

  var mi, si, bmi, bsi; // minute interval, seconds interval, break min interval, break sec interval

  $("#timeState").html('TO BE STARTED')
  $('#sessionTime').html(DEF_MIN)
  $('#breakTime').html(BREAK_MIN)

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

  $('#start').click(function () {
    
    function sI () { // function that generates seconds with setInterval
      si = setInterval(function () {
        sec -= 1
        console.log("Seconds Interval")
        if (sec == 0) {
          clearInterval(si)
          sec = DEF_SEC
          sI()
        }
        display()
      }, 1000)
    }

    function mI () {
        $("#timeState").html('SESSION TIME ...');
      mi = setInterval(function () {
        min -= 1
        console.log("Minutes Interval")
        if (min == 0) {
          clearInterval(mi)
          clearInterval(si)
          min = DEF_MIN
          bsI();
          bmI();
        }
      }, 1000 * DEF_SEC)
    }

    function bmI () {
        $("#timeState").html('BREAK TIME ...');
      bmi = setInterval(function () {
        minBreak -= 1
        console.log("Break MInutes Interval")
        if (minBreak == 0) {
          minBreak = BREAK_MIN;
          secBreak = BREAK_SEC
          clearInterval(bsi);
          clearInterval(bmi);
          sI();
          mI();
        }
        
      }, 1000 * BREAK_SEC)
    }

    function bsI() {
        bsi = setInterval(function() {
            secBreak -= 1
            console.log("Break Seconds Interval")
            if (secBreak == 0) {
                clearInterval(bsi)
                secBreak = BREAK_SEC
                bsI();
            }
            console.log(secBreak)
            displayBreak();
        }, 1000)
    }

    function display () {
        displaySec = sec;
        displayMin = min;
        if (sec == 60) {
            displaySec = "00"
        } else {
            displayMin--;
        }
        output.html(displayMin + ':' + displaySec)
    }

    function displayBreak () {
        displaySec = secBreak;
        displayMin = minBreak;
        if (secBreak == 60) {
            displaySec = "00"
        } else {
            displayMin--;
        }
        output.html(displayMin + ':' + displaySec)
    }

    sI()
    mI()
  })
})

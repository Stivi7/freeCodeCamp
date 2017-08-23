$('document').ready(function () {
  var memory = '0', // Initialize memory variable
    current = '0', // Current value (on display)
    operation = 0, // Records code for the operators
    maxLength = 20 // Max length of digits

  $('#ac').click(function () { // all clear function
    current = '0'
    operation = 0
    memory = '0'
    $('#screen').html('0')
  })

  $('#ce').click(function () { // clear function for current value
    current = '0'
    $('#screen').html('0')
  })

  $('.buttonBody').click(function (e) { // adds digits to the screen

    if (current == 0 && current.indexOf('.') == -1) {
      current = e.target.id
    } else {
      current = current + e.target.id
    }
    if (current.length > maxLength) {
      current = 'Too Long'
    }

    $('#screen').html(current)
  })

  $('.buttonDot').click(function (e) { // insert dot if nesecary
    if (current.length == 0) {
      current = '0.'
    } else {
      if ((current.indexOf('.') == -1) && (current.indexOf('e') == -1)) {
        current = current + '.'
      }
    }
    $('#screen').html(current)
  })



  $('.buttonEqual').click(function () {
    $('#screen').html(eval(current))
    operation = 0 // clear operation
    memory = '0' // clear memory


  })
})

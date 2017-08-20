$('document').ready(function () {
  var memory = '0', // Initialize memory variable
    current = '0', // Current value (on display)
    operation = 0, // Records code for the operators
    maxLength = 20 // Max length of digits

  $('#ac').click(function () {
    $('#screen').html('0')
  })

  $('.buttonBody').click(function (e) {
    // current = e.target.id
    if (current == 0 /*&& current.indexOf(".") == -1*/) {
      current = e.target.id
    } else {
      current = current + e.target.id
    }
    $('#screen').html(current)
  })
})

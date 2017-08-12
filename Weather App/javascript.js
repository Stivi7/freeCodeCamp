$(document).ready(function () {
  var long
  var lat


  if (navigator.geolocation) { // get current position
    navigator.geolocation.getCurrentPosition(function (position) {
      long = position.coords.longitude
      lat = position.coords.latitude

      var api = 'https://fcc-weather-api.glitch.me/api/current?lon=' + long + '&lat=' + lat
      $.getJSON(api, function (data) { // api calls to get the objects
        var tempSwap = true
        var cTemp = (data.main.temp).toFixed()
        var weatherType = data.weather[0].description
        var windSpeed = data.wind.speed
        // var icon = data.weather[0].icon
        var fTemp = ((cTemp) * (9 / 5) + 32).toFixed()

        $('#weather').html(weatherType)
        // $("#weather").html("<img src =" + icon + ">")
        $('#temp').html(cTemp + '&#8451')


        $('#windspeed').html(windSpeed + 'mph')

        $('#button').on('click', function () { // toggle button

          if (tempSwap === false) {
            $('#temp').html(cTemp + '&#8451')
            tempSwap = true
          }else {
            $('#temp').html(fTemp + '&#8457')
            tempSwap = false
          }
        })

        if (cTemp > 30) {
          $('body').css('background-color', '#FFC604')
        } else if (cTemp > 15 || cTemp < 30) {
          $('body').css('background-color', '#0FBEDD')
        } else if (cTemp < 15) {
          $('body').css('background-color', '#BACBCE')
        }
      }) // json end



    }) // navigator end
  } // if end




}) // ready function end

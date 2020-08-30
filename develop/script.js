let goBtn = $('#gobutton');

var APIKey = "&appid=1af6ba79a7cd0d2de48d2151f2f00c58";

const locationResult = $('#location');
const tempResult = $('#temperature');
const humidityResult = $('#humidity');
const windResult = $('#wind');

$('#day1').text(moment().add(1, 'days'));
$('#day2').text(moment().add(2, 'days'));
$('#day3').text(moment().add(3, 'days'));
$('#day4').text(moment().add(4, 'days'));
$('#day5').text(moment().add(5, 'days'));

$(document).ready(function () {

  $('#gobutton').click(function () {
    console.log($('#locationsearch').val());
    let locationSearch = $('#locationsearch').val();

    callAPIs(locationSearch);



  })

  function callAPIs(locationSearch) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + locationSearch + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);

      var temperature = response.main.temp 
      $('#temperature').text(temperature);
      
      var lon = (response.coord.lon);
      var lat = (response.coord.lat);
      var queryURL3 = "http://api.openweathermap.org/data/2.5/uvi?&lat=" + lat + "&lon=" + lon + APIKey;

      $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL3);
        console.log(response);
      });
    });

    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + locationSearch + APIKey;

    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL2);
      console.log(response);
    });

  }

  // pseudocode

  // 1. get html element into java $('#id')
  // 2. get data in right location
  // 3. upload value

});
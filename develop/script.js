let goBtn = $('#gobutton');

var APIKey = "&appid=1af6ba79a7cd0d2de48d2151f2f00c58";

const locationResult = $('#location');
const tempResult = $('#temperature');
const humidityResult = $('#humidity');
const windResult = $('#wind');
const UV = $('#UV');

$('#day1').text(moment().add(1, 'days'));
$('#day2').text(moment().add(2, 'days'));
$('#day3').text(moment().add(3, 'days'));
$('#day4').text(moment().add(4, 'days'));
$('#day5').text(moment().add(5, 'days'));

$('#locationsearch').keypress(function (event) {
  if (event.keyCode === 13) {
    $('#gobutton').click();
  }
});


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
      $('#temperature').text((((((temperature - 273.15)*1.8) + 32)) + " ° F"));
      var humidity = response.main.humidity
      $('#humidity').text(humidity + " %");
      var wind = response.wind.speed
      $('#wind').text(wind + " mph");
      
      var lon = (response.coord.lon);
      var lat = (response.coord.lat);
      var queryURL3 = "http://api.openweathermap.org/data/2.5/uvi?&lat=" + lat + "&lon=" + lon + APIKey;

      $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL3);
        console.log(response);

        var UV = response.value
        $('#UV').text(UV);
        
      });
    });

    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + locationSearch + APIKey;

    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL2);
      console.log(response);

      // HERE, FINISH

      var temperature1 = response.list[0].main.temp;
      $('#temperature1').text((((((temperature1 - 273.15)*1.8) + 32)) + " ° F"));
      var humidity1 = response.list[0].main.humidity;
      $('#humidity1').text(humidity1);
      var wind1 = response.list[0].wind.speed;
      $('#wind1').text(wind1);

      var temperature2 = response.list[8].main.temp;
      $('#temperature2').text((((((temperature2 - 273.15)*1.8) + 32)) + " ° F"));
      var humidity2 = response.list[8].main.humidity;
      $('#humidity2').text(humidity2);
      var wind2 = response.list[8].wind.speed;
      $('#wind2').text(wind2);

      var temperature3 = response.list[16].main.temp;
      $('#temperature3').text((((((temperature3 - 273.15)*1.8) + 32)) + " ° F"));
      var humidity3 = response.list[16].main.humidity;
      $('#humidity3').text(humidity3);
      var wind3 = response.list[16].wind.speed;
      $('#wind3').text(wind3);

      var temperature4 = response.list[24].main.temp;
      $('#temperature4').text((((((temperature4 - 273.15)*1.8) + 32)) + " ° F"));
      var humidity4 = response.list[24].main.humidity;
      $('#humidity4').text(humidity4);
      var wind4 = response.list[24].wind.speed;
      $('#wind4').text(wind4);

      var temperature5 = response.list[32].main.temp;
      $('#temperature5').text((((((temperature5 - 273.15)*1.8) + 32)) + " ° F"));
      var humidity5 = response.list[32].main.humidity;
      $('#humidity5').text(humidity5);
      var wind5 = response.list[32].wind.speed;
      $('#wind5').text(wind5);

    });

  }

  // pseudocode

  // 1. get html element into java $('#id')
  // 2. get data in right location
  // 3. upload value

});
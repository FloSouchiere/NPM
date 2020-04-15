let weather = require('weather-js');
 
weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);

    console.log('The Temperature in SF is actually: ' + result[0]["current"]["temperature"], 'and the Sky is: ' + result[0]["current"]["skytext"])

  });
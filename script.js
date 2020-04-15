let weather = require('weather-js');
 
weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);

    console.log('Current temperature: ' + result[0]["current"]["temperature"]);
    console.log('Current sky: ' + result[0]["current"]["skytext"]);

  });
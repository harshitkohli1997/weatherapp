const request = require('request');

 var getWeather = (lat,lng,callback) => {
request({
    url:`https://api.forecast.io/forecast/2713c22b739535de957598da781bd556/${lat},${lng}`,
    json: true 
}, (error, response, body) => {

if(error) {
    callback('unable to connect');
}
else if(response.statusCode === 400) {
    callback('unable to fetch');
}
 else if(response.statusCode === 200) {
     callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature    
    });
 } else {
     console.log('unable to fetch data');
 }
});
 };
 module.exports.getweather = getWeather;
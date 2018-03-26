const request = require('request');

var geocodeAddress = (address, callback) => {

// console.log(argv);
var encode = encodeURIComponent(address);

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encode}`,
    json: true

},(error,response,body) => {
    //error handling
    if(error)
    {
        callback('unable to connect');
    } else if(body.status === 'ZERO_RESULTS') {
callback('Wrong address');
    } else if(body.status === 'OK'){
        callback(undefined , {
            address   : body.results[0].formatted_address,
            lattitude :body.results[0].geometry.location.lat,
            longitude : body.results[0].geometry.location.lng
        })

    }
    //  console.log(JSON.stringify(body,undefined,2));
});
};

module.exports.geocodeAddress = geocodeAddress;
//api key 2713c22b739535de957598da781bd556
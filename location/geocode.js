const request = require('request');
let geocode = (address, callback) => {
    request({
        url: `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=0dee401dec5d4da1920f9a4bc2da99b9&language=en&pretty=1`,
        json: true
    }, (error, response, body) => {
        callback({
            address: body.results[0].formatted,
            lat: body.results[0].geometry.lat,
            lng: body.results[0].geometry.lng
        });
    });
};

module.exports.geocodeAdress = geocode;
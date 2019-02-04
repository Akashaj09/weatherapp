const resquest = require('request');

const getWeather = (lat, lng, callback) => {
    resquest({
        url : `https://api.darksky.net/forecast/3ab7048e951b479739f4f0ac4d822f13/${lat},${lng}`,
        json: true
    }, (error, response, body)  => {
        callback(body.currently);
    });
};
module.exports.getWeather = getWeather;


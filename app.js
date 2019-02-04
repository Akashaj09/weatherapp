const yargs = require("yargs");
const geocode = require('./location/geocode');
const weather = require('./weather/weather');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Hey there',
        string: true
    }
}).help().alias('help', 'h').argv;

geocode.geocodeAdress(argv.address, (response) => {
    weather.getWeather(response.lat, response.lng, (response) => {
        console.log(response);
    })
});
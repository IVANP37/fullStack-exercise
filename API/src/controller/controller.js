const fetch = require('node-fetch');


const getWeather = (req, res) => {
    const { country, city } = req.body;
    const data = { ...req.body };
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + data.city + '&' + data.country + '&appid=' +  process.env.WEATHER_KEY + '&units=metric')
        .then((res) => {
            return res.json();
        }).then((json) => {           
            return  res.status(200).json(json);
        })
}


const getWeatherfaceCast = (req, res) => {
    const { country, city, key } = req.body;
    const data = { ...req.body };
    fetch('https://api.openweathermap.org/data/2.5/forecast/hourly?q=' + data.city + '&' + data.country + '&appid=' + process.env.WEATHER_KEY + '&units=metric')
        .then((res) => {
            return res.json();
        }).then((json) => {           
            return  res.status(200).json(json);
        })
}
module.exports = {
    getWeather,
    getWeatherfaceCast
};



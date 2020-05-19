// Init weather object
const weather = new Weather('Lod', 'Israel');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Haifa', 'Israel')

function getWeather() {
    weather
        .getWeather()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));
}

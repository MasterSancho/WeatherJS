// Init weather object
const weather = new Weather('Lod', 'Israel');

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Haifa', 'Israel')

function getWeather() {
    weather
        .getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}

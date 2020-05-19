class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.windDir = document.getElementById('w-wind-dir');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.request.query;
        this.desc.textContent = weather.current.weather_descriptions;
        this.string.textContent = `${weather.current.temperature} C` ;
        this.icon.setAttribute('src', weather.current.weather_icons);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike} C`;
        this.windDir.textContent = `Wind Direction: ${weather.current.wind_dir}`;
        this.wind.textContent = `Wind Speed: ${weather.current.wind_speed}`;
    }
}

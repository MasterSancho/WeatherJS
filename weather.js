const config = new Config

class Weather {
    constructor(city, country) {
        this.apiKey = config.apiKey;
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(
            `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}, ${this.country}`
        );

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}

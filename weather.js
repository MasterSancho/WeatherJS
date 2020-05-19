class Weather {
    constructor(city, country) {
        this.apiKey = '1934aecfb03d5decf0ec951f60ce2877';
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

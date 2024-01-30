// Constants 
const API_key = '0ac55bb4b1e671c1828e3329d30f2307';

// DOM elements
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-btn');
const weatherContainer = document.getElementById('weather-container');

// Event listener for search button click
searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if(city !== '') {
        getWeatherData(city);
        cityInput.value = '';
    }
});

// Function to fetch weather data from the API
function getWeatherData(lat, lon) {
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the data returned from the API
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the API call
            console.error(error);
        });
}
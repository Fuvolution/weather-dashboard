// Constants 
const API_key = '1cb0a3948676256a448dad55bf87c6be';

// DOM elements
const latitudeInput = document.getElementById('latitude-input');
const longitudeInput = document.getElementById('longitude-input');
const searchButton = document.getElementById('search-btn');
const weatherContainer = document.getElementById('weather-container');

// Event listener for search button click
searchButton.addEventListener('click', () => {
    const latitude = latitudeInput.value.trim();
    const longitude = longitudeInput.value.trim();
    if(latitude !== '' && longitude !== '') {
        getWeatherData(latitude, longitude);
        latitudeInput.value = '';
        longitudeInput.value = '';
    }
});

// Function to fetch weather data from the API
function getWeatherData(lat, lon) {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}';

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
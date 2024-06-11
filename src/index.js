function refreshWeather(response){
    let temperatureElement= document.querySelector("#temperature")
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML= response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);

}


function searchCity(city){
    let apiKey = `b430f3eb1cfa45o92ta170b00b8665fa`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
}

function searchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}
let searchforForm = document.querySelector("#search-form");
searchforForm.addEventListener("submit", searchSubmit);
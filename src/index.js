function refreshWeather(response){
    let temperatureElement= document.querySelector("#temperature")
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#Humidity");
    let windElement = document.querySelector("#Wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

 
    cityElement.innerHTML= response.data.city;
    timeElement.innerHTML = formatDate(date);
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML= response.data.condition.description;
    humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
    windElement.innerHTML= `${response.data.wind.speed}km/h`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day} ${hours}:${minutes}`;
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
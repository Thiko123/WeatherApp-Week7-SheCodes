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
    getForecast(response.data.city);
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

function getForecast(city){
    let apiKey = `b430f3eb1cfa45o92ta170b00b8665fa`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
}
function displayForecast(response){
let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  let forecastHtml="";

  days.forEach(function(day){
forecastHtml= forecastHtml+
`<div class="weather-forecast-day">
<div class="weather-forecast-date">${day}</div>
<div class="weather-forecast-icon">🌤️</div>
<div class="weather-forecast-temperatures">
  <span class="weather-forecast-temperature">
    <strong> 15º </strong>
  </span>
  <span class="weather-forecast-temperature"> 9º </span>

</div>
</div>`;
});
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML= forecastHtml;
}

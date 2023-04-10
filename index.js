let now = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let currentDate = document.querySelector("#currentWeather");
console.log(currentDate);
currentDate.addEventListener("load", currentDate);
currentDate.innerHTML = `<strong>Weather</strong>
  <br> ${day} ${hours}:${minutes}
  <br> Light mixture of precipitation. Overcast.`;

function displayCurrentWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#currenttempdisplay").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "dc8b90c2c36e898f9078ad1fbcdbba04";
  let city = document.querySelector("#search-text-input").value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiURL).then(displayCurrentWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

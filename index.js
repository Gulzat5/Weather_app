const apiKey = "00c22602fbb990281cb8ccd85103f25d";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;
const searchBox = document.getElementById("cityInput");
console.log(searchBox.value, "searchBox value");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    const wetherIconst = document.querySelector(".weather-icon");
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp1").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
      wetherIconst.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      wetherIconst.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      wetherIconst.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      wetherIconst.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      wetherIconst.src = "./images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  console.log(searchBox.value, "value");
});

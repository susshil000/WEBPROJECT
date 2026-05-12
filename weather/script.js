const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

const cityName = document.querySelector(".location p");
const temperature = document.querySelector(".temperature h2");
const condition = document.querySelector(".temperature p");
const weatherIcon = document.querySelector(".weather-icon");

const humidity = document.querySelectorAll(".details .box h3")[0];
const wind = document.querySelectorAll(".details .box h3")[1];
const feelsLike = document.querySelectorAll(".details .box h3")[2];

const API_KEY = "8d75b3e6ceb69b560c8e9f0e3e606f7a";

button.addEventListener("click", () => {
    const city = input.value.trim();
    if (city !== "") {
        getWeather(city);
    }
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});

// function getWeather(city) {
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

//     )
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("City not found");
//             }
//             return response.json();
//         })
//         .then((data) => {

//             updateUI(data);
//         })
//         .catch(() => {
//             alert("City not found. Please try again!");
//         });
// }
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    updateUI(data);

  } catch (error) {
    alert("City not found or API issue");
  }
}
function updateUI(data) {
    cityName.innerText = data.name;
    temperature.innerText = Math.round(data.main.temp) + "°C";
    condition.innerText = data.weather[0].main;

    humidity.innerText = data.main.humidity + "%";
    wind.innerText = Math.round(data.wind.speed * 3.6) + " km/h";
    feelsLike.innerText = Math.round(data.main.feels_like) + "°";

    setIcon(data.weather[0].main);
}
function setIcon(type) {
    if (type === "Clear") {
        weatherIcon.innerText = "☀️";
    } else if (type === "Clouds") {
        weatherIcon.innerText = "☁️";
    } else if (type === "Rain") {
        weatherIcon.innerText = "🌧️";
    } else if (type === "Snow") {
        weatherIcon.innerText = "❄️";
    } else if (type === "Thunderstorm") {
        weatherIcon.innerText = "⛈️";
    } else {
        weatherIcon.innerText = "🌤️";
    }
}
const themeBtn = document.getElementById("themeToggle");


if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀️";
}


themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

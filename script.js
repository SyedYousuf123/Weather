const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cf605b9a18msh29a46313154a294p1dc1d1jsnfa02970e3e62",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const GetWeather = (city) => {
  cityName.innerHTML = city;
  result = city.charAt(0).toUpperCase() + city.slice(1);
  cityName.innerHTML = result;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      (cloud_pct.innerHTML = response.cloud_pct),
        (temp.innerHTML = response.temp),
        (feels_like.innerHTML = response.feels_like),
        (humidity.innerHTML = response.humidity),
        (min_temp.innerHTML = response.min_temp),
        (max_temp.innerHTML = response.max_temp),
        (wind_speed.innerHTML = response.wind_speed),
        (wind_degrees.innerHTML = response.wind_degrees),
        (sunrise.innerHTML = response.sunrise),
        (sunset.innerHTML = response.sunset);
    })
    .catch((err) => console.error(err));
};
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  GetWeather(search.value);
});
GetWeather("karachi");

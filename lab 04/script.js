
// Fetch weather data from the Open-Meteo API for Hostomel, Kyiv Oblast, Ukraine
const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=50.5684&longitude=30.2651&daily=sunrise,sunset,uv_index_max&hourly=temperature_2m,weather_code,is_day&current=temperature_2m,weather_code,is_day,relative_humidity_2m,rain&timezone=Europe%2FKyiv&forecast_days=1";

fetch(weatherURL)
.then(response => {
    // make into JSON format
    return response.json();
})
.then(data => {
    
// Function to identify weather conditions based on the weather code and whether it's day or night and add the corresponding icon and description
function describeWeather(weather_code, is_day) {
    const day = is_day !== 0;

    if (weather_code === 0) {
        return [day ? "☀️" : "🌙", "Clear sky"];
    } else if (weather_code === 1) {
        return [day ? "🌤️" : "🌙", "Mainly clear"];
    } else if (weather_code === 2) {
        return ["⛅", "Partly cloudy"];
    } else if (weather_code === 3) {
        return ["☁️", "Overcast"];
    } else if (weather_code === 45 || weather_code === 48) {
        return ["🌫️", "Fog"];
    } else if (weather_code >= 51 && weather_code <= 67) {
        return ["🌧️", "Drizzle or rain"];
    } else if (weather_code >= 71 && weather_code <= 77) {
        return ["❄️", "Snow"];
    } else if (weather_code >= 80 && weather_code <= 82) {
        return ["🌦️", "Rain showers"];
    } else if (weather_code >= 85 && weather_code <= 86) {
        return ["🌨️", "Snow showers"];
    } else if (weather_code >= 95) {
        return ["⛈️", "Thunderstorm"];
    } else {
        return ["🌡️", "Unknown weather"];
    }
}


    //Hourly Temperature info
    for (let i = 0; i < data.hourly.temperature_2m.length; i++) {
        const [icon, text] = describeWeather(
        data.hourly.weather_code[i],
        data.hourly.is_day[i]
    );

    document.getElementById("hourly-temp").innerHTML += 
        '<span class="temp-style-time">' + data.hourly.time[i].slice(11, 16) + "  " + '</span>' +
        '<span class="temp-style">' + icon + '</span>' +
        '<span class="temp-style">' + Math.round(data.hourly.temperature_2m[i]) + '</span>' +
        '<span class="temp-style">' + data.hourly_units.temperature_2m + '</span>' + " " + 
        '<span class="temp-style-txt">' + text + '</span>' + "<br>";
    }
    
    // function getDate(){
    //     const date = new Date();
    //     return date.now().toLos
    // }


    //Current Temperature info
const [currentIcon, currentText] = describeWeather(
    data.current.weather_code,
    data.current.is_day
);
document.getElementById("current-temp").innerHTML =
    '<span class="temp-style">' + currentIcon + '</span>' +
    '<span class="temp-style">' + data.current.temperature_2m + '</span>' +
    '<span class="temp-style">' + data.current_units.temperature_2m + '</span>' + " " + " " +
    '<span class="temp-style-txt">' + currentText + '</span>';

})
//check for errors in the fetch request and log them to the console
.catch((err) => {
    console.log(err);
});

 // Toggle the display of hourly temperature info  
function displayTemp() {

    let tempText = document.getElementById("hourly-temp");


    if (tempText.style.display === "" || tempText.style.display === "none") {
        tempText.style.display = "block";
    } else {
        tempText.style.display = "none";
    }
}
//class attribute change
  
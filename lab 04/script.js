const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=50.5684&longitude=30.2651&daily=sunrise,sunset,uv_index_max&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,rain&timezone=Europe%2FMoscow&forecast_days=1";

fetch(weatherURL)
.then(response => {
    return response.json();
})
.then(data => {
    //console.log(data)
console.log("button clicked");
    //Hourly Temperature info
    for (let i = 0; i < data.hourly.temperature_2m.length; i++) {
        document.getElementById("hourly-temp").innerHTML += data.hourly.time[i] + " : " + data.hourly.temperature_2m[i] + data.current_units.temperature_2m + "<br>";
    }
    //Current Temperature info
    document.getElementById("current-temp").textContent = "Current temperature:" + data.current.temperature_2m + data.current_units.temperature_2m;
})

.catch((err) => {
    console.log(err);
});

    

function displayTemp() {

}
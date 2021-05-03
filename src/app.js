function displayTemperature(response) {
    console.log(response.data.main.temp);
    let temperatureElement= document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML= response.data.weather[0].main;
console.log(response.data)
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
}


let apiKey = "3a327a359d60ca00abec49d1dbb82cad";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Aarhus&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature)


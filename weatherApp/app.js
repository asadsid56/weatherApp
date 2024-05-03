const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = "&appid=0be89323f7031a5f1ca75ab6380fe03a&units=metric"; 

let searchBox = document.querySelector("#searchBox");
let searchBtn = document.querySelector(".searchBtn"); 


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + apiKey); 
    const data = await response.json(); 

    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temperature ").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"; 
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); 
}); 

const input = document.querySelector("#input");
const search = document.querySelector("#search");
const weatherIcon = document.querySelector(".weatherIcon"); 
const searchBtn = document.querySelector("#searchBtn"); 



search.addEventListener("click", function(e) {
    e.preventDefault(); 

    // Clear Data 
    input.innerHTML = ""; 
    
   // Get Input Value
    let city = input.value; 
    // If input is empty show a msg
    if (city === '') {
        alert("Please enter a city")
        return
    }
    checkWeather(city); 
})

const apiKey = "0be89323f7031a5f1ca75ab6380fe03a"; 
// const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

async function checkWeather(city) {

    // Fetch Data 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);   
    const data = await response.json(); 
    // console.log(data);

    if (response.status == 404) {
        alert("Please enter a valid city name")
        return
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds") {
        // console.log("ok");
        weatherIcon.src = "images/clouds.png"; 
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"; 
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"; 
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"; 
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"; 
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"; 
    }
    
    document.querySelector(".weather").style.display = "block"; 

}

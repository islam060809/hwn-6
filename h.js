const btn = document.querySelector("button")
const inp = document.querySelector("input")
const rot = document.querySelector(".rot")
const end = document.querySelector(".end")
const no = document.querySelector("#no")
const url = "https://api.openweathermap.org/data/2.5/weather?q="
const apiK = "f631ea87daddf959f8d7a12c30009e4c"

async function getWeather(city) {
    const res = await fetch(url + city + "&appid=" + apiK)
    const data = await res.json()
    console.log(data);
    showCatd(data)
}


btn.onclick = () => {
    getWeather(inp.value)
}

function showCatd(da) {
    rot.innerHTML = ""
    if (da.cod == 404){ 
        no.style.display = "block"
        end.style.marginTop = "364px"
    }else{
        no.style.display = "none"
        end.style.marginTop = "64px"
        rot.innerHTML += `
    <div class="root">
    <div class="weathInfo">
    <h3>${da.name}</h3>
    <p class="temp">${Math.round(da.main.temp - 273.15)}°<span>C</span></h2>
    <p>Weather: ${da.weather[0].main}</p>
    <p>Wind speed: ${da.wind.speed}км/ч</p>
    <p>Humidity: ${da.main.humidity}%</p>
    </div>
    <img src="${switchImg(da.weather[0].main)}" alt="">
    </div>
    `
    }
}
function switchImg(title) {
    switch (title) {
        case "Clouds":
            return "8 1.png"
        case "Clear":
            return "ястно.png"
        case "Snow":
            return "снег.png"
        case "Rain":
            return "дожд.png"
        default:
            return "8 1.png"
    }
}
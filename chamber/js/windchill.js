const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=318b4d20506cf8ad502829d2accf0043";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const iconsrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`
        const temperature = document.querySelector('#temperature').textContent = jsObject.main.temp.toFixed(0);
        const desc = jsObject.weather[0].description;
        // document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;

        const speed = document.getElementById("speed").textContent = jsObject.wind.speed;
        const box = document.querySelector("#windchill-result");
        const f = ""
        if (temperature <= 50 && speed > 3.0) {
            const f = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
            let result = Math.round(f);
            box.innerHTML = result;
        } else {
            box.innerHTML = "N/A"
        };
    })


const temperature_ = parseInt(temperature)
const speed_ = parseInt(speed)
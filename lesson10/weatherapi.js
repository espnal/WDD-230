const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=318b4d20506cf8ad502829d2accf0043";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });
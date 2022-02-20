const box = document.querySelector("#windchill-result");

const temperature = document.getElementById("temperature").innerHTML;

const speed = document.getElementById("speed").innerHTML;

const temperature_ = parseInt(temperature)
const speed_ = parseInt(speed)
const f = ""

if (temperature_ <= 50 && speed_ > 3.0) {
    const f = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16)
    let result = Math.round(f);
    box.innerHTML = result;
} else {
    box.innerHTML = "N/A"
};
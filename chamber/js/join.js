// Form page hidden date
const cDate = new Date();
localStorage.setItem("visitUpdate", cDate);

document.querySelector("#current_update").value = cDate;
// import * as js from "./js.js";
// js.toggleMenu()
// js.toggleMinBanner()
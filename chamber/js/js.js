// Div that will contain the time at navigation bar
const datefield = document.querySelector(".time-div");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

// Create button menu 
function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

const x = document.getElementById("burg-btn");
x.onclick = toggleMenu;

// Div that will contain the time at footer

const field = document.querySelector(".time");

field.innerHTML = `Last Modification: ${document.lastModified}`;






const named = document.getElementById("min-banner");

function toggleMinBanner() {
    named.classList.toggle("show-banner");
    console.log('class attribute contains: ', named.className)
}


const date = new Date();
const todaysdate = date.getDay();
if (todaysdate == 1 || todaysdate == 2) {
    toggleMinBanner()
    let x = document.querySelector("#text");
    x.innerHTML = `🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`
}
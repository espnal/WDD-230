// Div that will contain the time at navigation bar
function datebox() {
    const datefield = document.querySelector(".time-div");

    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    return datefield.innerHTML = `<em>${fulldate}</em>`;
}
datebox();
// --------------------------------------------
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
}
// --------------------------------------------

const date = new Date();
const todaysdate = date.getDay();
if (todaysdate == 1 || todaysdate == 2) {
    toggleMinBanner();
    let div = document.querySelector(".show-banner");
    div.innerHTML = `<p id="text">🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>
    <button id="btn-p">Join</button>`;
} else {
    named.remove();
}
// --------------------------------------------
const parf7 = document.querySelector("#paf7");

function createElement(company, x) {
    const icon = document.createElement('img');
    const h2 = document.createElement("h2");
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    ul.appendChild(li);
    li.appendChild(icon)
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    icon.setAttribute('src', company.icon);
    parf7.appendChild(h2)
    parf7.appendChild(ul)
    parf7.appendChild(li)
    parf7.appendChild(p)
    parf7.appendChild(p2)
    parf7.appendChild(p3)
}

const jsonUrl = "data/homejson.json"

fetch(jsonUrl)
    .then((response) => response.json())
    .then((jsObject_) => {
        console.log(jsObject_)
        const companies = jsObject_["companies"]
        let x = companies.
        console.log(x)
            // companies.map(createElement);
    })